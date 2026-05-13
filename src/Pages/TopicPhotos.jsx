import { useEffect, useState } from "react";

function TopicPhotos({ topicId, lang = "en" }) {
  const [photosData, setPhotosData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://profxawards.com/api/v1/topic/photos/${topicId}/${lang}`)
      .then((res) => res.json())
      .then((data) => {
        setPhotosData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching topic photos:", err);
        setLoading(false);
      });
  }, [topicId, lang]);

  if (loading) return <p>Loading topic photos...</p>;
  if (!photosData) return <p>No data found.</p>;

  return (
    <div>
      <h3>{photosData.topic_title}</h3>

      {/* Main photo */}
      {photosData.topic_photo && (
        <div>
          <img
            src={photosData.topic_photo}
            alt={photosData.topic_title}
            style={{ width: "300px" }}
          />
        </div>
      )}

      {/* Additional photos */}
      {photosData.photos_count > 0 ? (
        <div>
          <h4>Additional Photos</h4>
          <div style={{ display: "flex", gap: "10px" }}>
            {photosData.photos.map((photo) => (
              <img
                key={photo.id}
                src={photo.url}
                alt={photo.title}
                style={{ width: "150px" }}
              />
            ))}
          </div>
        </div>
      ) : (
        <p>No additional photos.</p>
      )}
    </div>
  );
}

export default TopicPhotos;

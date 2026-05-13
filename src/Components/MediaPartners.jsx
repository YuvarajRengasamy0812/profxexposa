import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import {getAllMediaPartners } from "../api/mediapartners";

const MediaPartners = () => {

const [media, setMedia] = useState([]);

  useEffect(() => {
    getMediaList();
  }, [])


  const getMediaList = () => {
    getAllMediaPartners()
      .then((res) => {
        setMedia(res?.data?.topics);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section className="partners pt-0">
      <div className="container">
        <div className="partner-inner">
          <div className="partner-title text-center pb-6 w-lg-60 m-auto">
            <p className="mb-1 pink">OUR MEDIA PARTNERS</p>
            <h2 className="mb-1">
              MEDIA <span className="pink">PARTNERS</span>
            </h2>
            <p className="m-0">
              We are proud to collaborate with a diverse group of media partners.
            </p>
          </div>

          <div className="partner-img pb-6">
            <div className="row row-cols-1 row-cols-lg-5 row-cols-md-5">
              {media.map((partner, index) => (
                <div className="col p-0" key={index}>
                  <div className="p-2 partner-img-box text-center rounded">
                    <a href={partner.details} target="_blank" rel="noopener noreferrer">
                      <img
                        src={partner.photo_file}
                        alt="partner-img"
                        className="opacity-75 w-lg-100 w-md-100 w-75"
                      />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="partner-button text-center">
            <Link to="/Contact" className="btn">
              Become a Media Partner
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MediaPartners

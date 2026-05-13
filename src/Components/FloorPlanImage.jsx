import React from "react";

const FloorPlanImage = ({ id }) => (
  <section id={id} className="floorplan-image-section py-5 py-md-7">
    <div className="container">
      <div className="floorplan-image-wrap text-center">
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/floorplan-layout.jpg`}
          alt="PROFX EXPO AFRICA floor plan layout"
          className="img-fluid w-100 rounded shadow-sm"
          style={{ maxWidth: "1200px", height: "auto" }}
        />
      </div>
    </div>
  </section>
);

export default FloorPlanImage;

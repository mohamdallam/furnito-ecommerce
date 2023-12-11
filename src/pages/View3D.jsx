import React from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

const View3D = () => {
  return (
    <Helmet title="3D View">
      <CommonSection title="3D View" />
      <div className="py-1">
        <iframe
          title="Three.js Room Configurator"
          src="https://room3d-allam.vercel.app/"
          width="100%"
          height="800px"
          frameBorder="0"
        />
      </div>
    </Helmet>
  );
};

export default View3D;

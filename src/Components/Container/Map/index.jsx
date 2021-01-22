import React from "react";
import { Link } from "react-router-dom";
import Pashchim from "../../../images/PASHCHIM-min.png";
import Awadh from "../../../images/awadh-min.png";
import Bundelkhand from "../../../images/BUNDELKHAND-min.png";
import Purvanchal from "../../../images/PURVANCHAL-min.png";
const Map = () => {
  return (
    <>
      <div className="map-out-box-big">
        <div className="padding-box-of-map">
          <div className="map-img1">
            <Link to="/Pashchim">
              <img src={Pashchim} alt="" />
            </Link>
          </div>
          <div className="map-img2">
            <Link to="/awadh">
              {" "}
              <img src={Awadh} alt="" />
            </Link>
          </div>
          <div className="map-img3">
            <Link to="/bundelkhand">
              <img src={Bundelkhand} alt="" />
            </Link>
          </div>
          <div className="map-img4">
            <Link to="purvanchal">
              {" "}
              <img src={Purvanchal} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Map;

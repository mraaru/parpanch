import React from "react";
import Imagea from "../../../images/photo.webp";
import { Link } from "react-router-dom";

const Boxnewsa = () => {
  return (
    <>
      <div className="bog-box-rg-lg">
        <div className="undex-box-lg">
          <div className="live-niws-liv-news-on">
            <Link to="/">
              <img src={Imagea} alt="" />
            </Link>
          </div>
          <div className="live-articl-santance">
            <span>
              <Link to="/">
                Lorem ipsum dolor sit amet, elit. Pariatur, magni?
              </Link>
            </span>

            <span>
              <Link to="/">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
                iure ducimus dolores dolorum consequatur aspernatur obcaecati
                rerum
              </Link>
            </span>
          </div>
        </div>
        <div className="undex-box-rg">
          <div className="gr-box-rg-rg">
            <Link to="/">
              <img src={Imagea} alt="" />
            </Link>
            <Link to="/">
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae, nihil.
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Boxnewsa;

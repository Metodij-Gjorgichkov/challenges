import React from "react";
import { BannerContentType } from "../types/type";

const Banner: React.FC<BannerContentType> = ({
  title,
  button_title,
  content,
}) => {
  return (
    <div className="py-5 bg-dark hero-header mb-5">
      <div className="container my-5 py-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-6 text-center text-lg-start">
            <h1 className="display-3 text-white">{title}</h1>
            <p className="text-white mb-4 pb-2">{content}</p>
            <a href="#" className="btn btn-primary py-sm-3 px-sm-5 me-3">
              {button_title}
            </a>
          </div>
          <div className="col-lg-6 text-center text-lg-end overflow-hidden">
            <img className="img-fluid" src="/images/hero.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

import React from "react";
import { FeatureType } from "../types/types";

interface Props {
  dataFeatureBlock: FeatureType;
}
const FeatureBlock: React.FC<Props> = ({ dataFeatureBlock }) => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6">
            <h4 className="section-title">{dataFeatureBlock.preTitle}</h4>
            <h1 className="display-5 mb-4">{dataFeatureBlock.title}</h1>
            <p className="mb-4">{dataFeatureBlock.first_paragraph}</p>
            <div className="row g-4">
              {dataFeatureBlock.usp_items.map((item) => (
                <div className="col-12" key={item.id}>
                  <div className="d-flex align-items-start">
                    <img className="flex-shrink-0" src={item.icon} alt="Icon" />
                    <div className="ms-4">
                      <h3>{item.title}</h3>
                      <p className="mb-0">{item.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="feature-img">
              <img
                className="img-fluid"
                src={dataFeatureBlock.image_two}
                alt=""
              />
              <img
                className="img-fluid"
                src={dataFeatureBlock.image_one}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureBlock;

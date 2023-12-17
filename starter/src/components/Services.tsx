import React from "react";
import { ServicesBlockType, ServicesType } from "../types/type";

interface Props {
  serviceBlockData: ServicesBlockType;
  servicesData: ServicesType[];
}

const Services: React.FC<Props> = ({ serviceBlockData, servicesData }) => {
  return (
    <div className="py-5">
      <div className="container">
        <div className="text-center">
          <h5 className="section-title ff-secondary text-center text-primary fw-normal">
            {serviceBlockData.preTitle}
          </h5>
          <h1 className="mb-5">{serviceBlockData.title}</h1>
        </div>
        <div className="row g-4">
          {servicesData.map((service) => {
            return (
              <div key={service.id} className="col-lg-3 col-sm-6">
                <div className="service-item rounded pt-3">
                  <div className="p-4">
                    <i className={`${service.icon} text-primary mb-4`} />
                    <h5>{service.title}</h5>
                    <p>{service.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;

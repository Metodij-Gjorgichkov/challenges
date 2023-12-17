import React from "react";
import { MenuType } from "../types/type";

interface Props {
  dataSearch: MenuType[];
}

const Results: React.FC<Props> = ({ dataSearch }) => {
  return (
    <div className="py-5">
      <div className="container">
        <div className=" text-center">
          <div className="row g-4">
            {dataSearch.map((data) => (
              <div className="col-lg-6" key={data.id}>
                <div className="d-flex align-items-center">
                  <img
                    className="flex-shrink-0 img-fluid rounded"
                    src={data.image}
                    alt={data.name}
                    style={{ width: "80px" }}
                  />
                  <div className="w-100 d-flex flex-column text-start ps-4">
                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <span>{data.name}</span>
                      <span className="text-primary">${data.price}</span>
                    </h5>
                    <small className="fst-italic">{data.description}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;

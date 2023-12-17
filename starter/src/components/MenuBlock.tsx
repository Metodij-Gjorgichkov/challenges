import React from "react";
import { MenuBlockType, MenuType } from "../types/type";

interface Props {
  menuBlockData: MenuBlockType;
  menuData: MenuType[];
}

const MenuBlock: React.FC<Props> = ({ menuBlockData, menuData }) => {
  return (
    <div className="py-5">
      <div className="container">
        <div className="text-center">
          <h5 className="section-title ff-secondary text-center text-primary fw-normal">
            {menuBlockData.preTitle}
          </h5>
          <h1 className="mb-5">{menuBlockData.title}</h1>
        </div>
        <div className=" text-center">
          <div className="row g-4">
            {menuData.map((menu) => {
              return (
                <div key={`menu-${menu.id}`} className="col-lg-6">
                  <div className="d-flex align-items-center">
                    <img
                      className="flex-shrink-0 img-fluid rounded"
                      src={menu.image}
                      alt=""
                      style={{ width: "80px" }}
                    />
                    <div className="w-100 d-flex flex-column text-start ps-4">
                      <h5 className="d-flex justify-content-between border-bottom pb-2">
                        <span>{menu.name}</span>
                        <span className="text-primary">${menu.price}</span>
                      </h5>
                      <small className="fst-italic">{menu.description}</small>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBlock;

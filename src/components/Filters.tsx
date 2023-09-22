import { count } from "console";
import React, { useState } from "react";
import { bikeType } from "../App";

interface Props {
  showAll: () => void;
  applyFilter: (filterType: string, filterValue: string) => void;
  countCards: (filterType: string, filterValue: string) => number;
  allBikes: bikeType[];
}

const Filters: React.FC<Props> = ({
  showAll,
  applyFilter,
  countCards,
  allBikes,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>("Show All");

  const filterBrandNames = [
    "LE GRAND BIKES",
    "KROSS",
    "EXPLORER",
    "VISITOR",
    "PONY",
    "FORCE",
    "E-BIKES",
    "IDEAL",
  ];

  const handleFilterClick = (filterName: string) => {
    setActiveFilter(filterName);
  };

  return (
    <>
      <div className="col-12">
        <p className="filteredBy">Filtered by:</p>
      </div>

      <div className="col-12 pt-4">
        <div
          className={`d-flex justify-content-between all cursor-pointer hoveredOrange hovered showAllEl ${
            activeFilter === "Show All" ? "hoverOrange" : ""
          }`}
          onClick={() => {
            handleFilterClick("Show All");
            showAll();
          }}
        >
          <h6 id="showAll">Show all</h6>

          <p className="paragraphNum showAll">{allBikes.length}</p>
        </div>

        <hr />
      </div>

      <div className="col-12">
        <p className="gender">Gender</p>
        <div
          className={`d-flex justify-content-between cursor-pointer hoveredOrange male hovered ${
            activeFilter === "Male" ? "hoverOrange" : ""
          }`}
          onClick={() => {
            handleFilterClick("Male");
            applyFilter("gender", "MALE");
          }}
        >
          <h6>Male</h6>

          <p className="paragraphNum maleNum">{countCards("gender", "MALE")}</p>
        </div>

        <div
          className={`d-flex justify-content-between cursor-pointer hoveredOrange male hovered ${
            activeFilter === "Female" ? "hoverOrange" : ""
          }`}
          onClick={() => {
            handleFilterClick("Female");
            applyFilter("gender", "FEMALE");
          }}
        >
          <h6>Female</h6>

          <p className="paragraphNum femaleNum">
            {countCards("gender", "FEMALE")}
          </p>
        </div>

        <hr />
      </div>

      <div className="col-12">
        <p className="brand">Brand</p>

        {filterBrandNames.map((product, index) => (
          <div
            key={index}
            className={`d-flex justify-content-between cursor-pointer hoveredOrange hovered leGrand ${
              activeFilter === product ? "hoverOrange" : ""
            }`}
            onClick={() => {
              handleFilterClick(product);
              applyFilter("brand", activeFilter);
            }}
          >
            <h6 className="text-uppercase">{product}</h6>

            <p className="paragraphNum">{countCards("brand", product)}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Filters;

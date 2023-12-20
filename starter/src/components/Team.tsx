import React from "react";
import { TeamType } from "../types/types";
import { TitleBlock } from "../pages";
import Image from "next/image";

interface TeamProps {
  dataTeamBlock: TitleBlock;
  dataTeam: TeamType[];
}

const Team: React.FC<TeamProps> = ({ dataTeamBlock, dataTeam }) => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: "600px" }}>
          <h4 className="section-title">{dataTeamBlock.preTitle}</h4>
          <h1 className="display-5 mb-4">{dataTeamBlock.title}</h1>
        </div>
        <div className="row g-0 team-items">
          {dataTeam.map((data) => (
            <div className="col-lg-3 col-md-6" key={data.id}>
              <div className="team-item position-relative">
                <div className="position-relative">
                  <Image
                    src={data.avatar}
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                  <div className="team-social text-center">
                    <a className="btn btn-square" href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-square" href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-square" href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="bg-light text-center p-4">
                  <h3 className="mt-2">
                    {data.first_name} {data.last_name}
                  </h3>
                  <span className="text-primary">{data.position}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;

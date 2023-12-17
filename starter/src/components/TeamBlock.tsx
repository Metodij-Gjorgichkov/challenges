import React from "react";
import { TeamBlockType, TeamType } from "../types/type";

interface Props {
  teamBlockData: TeamBlockType;
  teamData: TeamType[];
}

const TeamBlock: React.FC<Props> = ({ teamBlockData, teamData }) => {
  return (
    <div className="pt-5 pb-3">
      <div className="container">
        <div className="text-center">
          <h5 className="section-title ff-secondary text-center text-primary fw-normal">
            {teamBlockData.preTitle}
          </h5>
          <h1 className="mb-5">{teamBlockData.title}</h1>
        </div>
        <div className="row g-4">
          {teamData.map((team) => {
            return (
              <div key={`team-${team.id}`} className="col-lg-3 col-md-6">
                <div className="team-item text-center rounded overflow-hidden">
                  <div className="rounded-circle overflow-hidden m-4">
                    <img className="img-fluid" src={team.avatar} alt="" />
                  </div>
                  <h5 className="mb-0">
                    {team.first_name} {team.last_name}
                  </h5>
                  <small>{team.position}</small>
                  <div className="d-flex justify-content-center mt-3">
                    <a className="btn btn-square btn-primary mx-1" href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-square btn-primary mx-1" href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-square btn-primary mx-1" href="">
                      <i className="fab fa-instagram"></i>
                    </a>
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

export default TeamBlock;

import React from "react";
import { GetStaticProps, NextPage } from "next";
import { AboutBlockType, TeamBlockType, TeamType } from "../../types/type";
import AboutBlock from "../../components/AboutBlock";
import TeamBlock from "../../components/TeamBlock";
import Breadcrumbs from "../../components/Breadcrumbs";

interface Props {
  aboutBlockData: AboutBlockType;
  teamBlockData: TeamBlockType;
  teamData: TeamType[];
}

const About: NextPage<Props> = ({
  aboutBlockData,
  teamBlockData,
  teamData,
}) => {
  return (
    <>
      <Breadcrumbs title="About" />
      <AboutBlock {...aboutBlockData} />
      <TeamBlock teamBlockData={teamBlockData} teamData={teamData} />
    </>
  );
};

export default About;

export const getStaticProps: GetStaticProps = async () => {
  const aboutBlockRes = await fetch("http://localhost:5001/about_block");
  const aboutBlockData: AboutBlockType = await aboutBlockRes.json();

  const teamBlockRes = await fetch("http://localhost:5001/team_block");
  const teamBlockData: TeamBlockType = await teamBlockRes.json();

  const teamRes = await fetch("http://localhost:5001/team");
  const teamData: TeamType[] = await teamRes.json();

  return {
    props: {
      aboutBlockData,
      teamBlockData,
      teamData,
    },
  };
};

import { GetStaticProps, NextPage } from "next";
import React from "react";
import PageBanner from "../../components/PageBanner";
import AboutBlock from "../../components/AboutBlock";
import FeatureBlock from "../../components/FeatureBlock";
import Team from "../../components/Team";
import { AboutType, FeatureType, TeamType } from "../../types/types";
import { TitleBlock } from "..";

export interface AboutPageType {
  about_block: {
    preTitle: string;
    title: string;
    first_paragraph: string;
    second_paragraph: string;
    years: string;
    slogan: string;
    image_one: string;
    image_two: string;
  };
  feature_block: {
    preTitle: string;
    title: string;
    first_paragraph: string;
    image_one: string;
    image_two: string;
    usp_items: {
      id: string;
      title: string;
      content: string;
      icon: string;
    }[];
  };
  team_block: {
    preTitle: string;
    title: string;
  };
}

interface AboutProps {
  dataAbout: AboutType;
  dataFeatureBlock: FeatureType;
  dataTeam: TeamType[];
  dataTeamBlock: TitleBlock;
}

const AboutPage: NextPage<AboutProps> = ({
  dataAbout,
  dataFeatureBlock,
  dataTeam,
  dataTeamBlock,
}) => {
  return (
    <>
      <PageBanner title={dataAbout.title} preTitle={dataAbout.preTitle} />
      <AboutBlock dataAbout={dataAbout} />
      <FeatureBlock dataFeatureBlock={dataFeatureBlock} />
      <Team dataTeam={dataTeam} dataTeamBlock={dataTeamBlock} />
    </>
  );
};

export default AboutPage;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("http://localhost:5001/about_page");
  const data: AboutPageType = await res.json();

  const resTeam = await fetch("http://localhost:5001/team");
  const dataTeam: TeamType[] = await resTeam.json();
  return {
    props: {
      dataAbout: data.about_block,
      dataFeatureBlock: data.feature_block,
      dataTeamBlock: data.team_block,
      dataTeam,
    },
  };
};

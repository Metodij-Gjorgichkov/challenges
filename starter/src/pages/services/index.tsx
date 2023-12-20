import { GetStaticProps, NextPage } from "next";
import React from "react";
import PageBanner from "../../components/PageBanner";
import Services from "../../components/Services";
import Team from "../../components/Team";
import { ServicesType, TeamType } from "../../types/types";
import { ServicesPageType, TitleBlock } from "..";

interface ServicesProps {
  dataServicesBlock: TitleBlock;
  dataTeamBlock: TitleBlock;
  dataServices: ServicesType[];
  dataTeam: TeamType[];
}

const ServicesPage: NextPage<ServicesProps> = ({
  dataServicesBlock,
  dataServices,
  dataTeam,
  dataTeamBlock,
}) => {
  return (
    <>
      <PageBanner
        title={dataServicesBlock.title}
        preTitle={dataServicesBlock.preTitle}
      />

      <Services dataServicesBlock={dataServicesBlock} services={dataServices} />
      <Team dataTeamBlock={dataTeamBlock} dataTeam={dataTeam} />
    </>
  );
};

export default ServicesPage;

export const getStaticProps: GetStaticProps = async () => {
  const resServicesPage = await fetch("http://localhost:5001/services_page");
  const dataServicesPage: ServicesPageType = await resServicesPage.json();

  const resServices = await fetch("http://localhost:5001/services");
  const dataServices: ServicesType[] = await resServices.json();

  const resTeam = await fetch("http://localhost:5001/team");
  const dataTeam: TeamType[] = await resTeam.json();
  return {
    props: {
      dataTeamBlock: dataServicesPage.team_block,
      dataServicesBlock: dataServicesPage.services_block,
      dataServices,
      dataTeam,
    },
  };
};

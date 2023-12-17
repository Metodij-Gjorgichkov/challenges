import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import { ServicesBlockType, ServicesType } from "../../types/type";
import { GetStaticProps, NextPage } from "next";
import Services from "../../components/Services";

interface Props {
  serviceBlockData: ServicesBlockType;
  servicesData: ServicesType[];
}

const ServicesNextPage: NextPage<Props> = ({
  serviceBlockData,
  servicesData,
}) => {
  return (
    <>
      <Breadcrumbs title="Services" />
      <Services
        serviceBlockData={serviceBlockData}
        servicesData={servicesData}
      />
    </>
  );
};

export default ServicesNextPage;

export const getStaticProps: GetStaticProps = async () => {
  const serviceBlockRes = await fetch("http://localhost:5001/services_block");
  const serviceBlockData: ServicesBlockType = await serviceBlockRes.json();

  const servicesRes = await fetch("http://localhost:5001/services");
  const servicesData: ServicesType[] = await servicesRes.json();

  return {
    props: {
      serviceBlockData,
      servicesData,
    },
  };
};

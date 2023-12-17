import React from "react";
import { MenuBlockType, MenuType } from "../../types/type";
import { GetStaticProps, NextPage } from "next";
import Breadcrumbs from "../../components/Breadcrumbs";
import MenuBlock from "../../components/MenuBlock";

interface Props {
  menuBlockData: MenuBlockType;
  menuData: MenuType[];
}

const Menu: NextPage<Props> = ({ menuBlockData, menuData }) => {
  return (
    <>
      <Breadcrumbs title="Menu" />
      <MenuBlock menuBlockData={menuBlockData} menuData={menuData} />
    </>
  );
};

export default Menu;

export const getStaticProps: GetStaticProps = async () => {
  const menuBlockRes = await fetch("http://localhost:5001/menu_block");
  const menuBlockData: MenuBlockType = await menuBlockRes.json();

  const menuRes = await fetch("http://localhost:5001/menu");
  const menuData: MenuType[] = await menuRes.json();

  return {
    props: {
      menuBlockData,
      menuData,
    },
  };
};

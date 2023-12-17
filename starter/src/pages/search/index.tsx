import { GetServerSideProps, NextPage } from "next";
import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import Results from "../../components/Results";
import { MenuType } from "../../types/type";

interface Props {
  dataSearch: MenuType[];
}

const SearchPage: NextPage<Props> = ({ dataSearch }) => {
  return (
    <>
      <Breadcrumbs title="Search" />

      {dataSearch.length === 0 ? (
        <div>
          There are no results with your search... please try searching for menu
          items
        </div>
      ) : (
        <Results dataSearch={dataSearch} />
      )}
    </>
  );
};

export default SearchPage;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  let dataSearch: MenuType[] = [];

  if (query.searchTerm) {
    const res = await fetch(`http://localhost:5001/menu?q=${query.searchTerm}`);

    dataSearch = await res.json();
  }

  return {
    props: {
      dataSearch,
    },
  };
};

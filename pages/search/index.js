import Result from "@/components/modules/templates/Search/Result";
import React from "react";
 import PageHeader from "@/components/modules/modules/PageHeader/PageHeader";

function Search({ data }) {
  return (
    <>
      <PageHeader route="" />
      <Result searchResult={data} />
    </>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;

 
  const res = await fetch("http://localhost:4000/menu");
  const data = await res.json();

  
  const searchTerm = query.q ? query.q.toLowerCase() : "";
  const searchResult = data.filter((item) => {
    const type = item.type ? item.type.toLowerCase() : "";
    const title = item.title ? item.title.toLowerCase() : "";
    return type.includes(searchTerm) || title.includes(searchTerm);
  });

  return {
    props: {
      data: searchResult,
    },
  };
}

export default Search;

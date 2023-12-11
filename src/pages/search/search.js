import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
const Search = () => {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("q");

  const url = "http://localhost:3000/recipes?q=" + query;
  const data = "d";
  console.log(url);
  // const { data, error, isLoading } = useFetch(url);

  return (
    <>
      <div className="container">
        <div className="content">
          <h2>Search</h2>
          <div className="">{data}</div>
        </div>
      </div>
    </>
  );
};

export default Search;

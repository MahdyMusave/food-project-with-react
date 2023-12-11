import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [search, setSearch] = useState();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${search}`);
  };
  return (
    <>
      <div className="search">
        <div className="form-search">
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <input
              type="search"
              id="search"
              name="search"
              placeholder="search"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </form>
          {search}
        </div>
      </div>
    </>
  );
};

export default Search;

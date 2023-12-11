import React from "react";
import { useFetch } from "../../hooks/useFetch";
import RecipeList from "../../components/recipeList";
const Home = () => {
  const { data, isLoading, error } = useFetch("http://localhost:3000/recipes");

  return (
    <>
      <div className="wrapper">
        <div className="container">
          {isLoading && <div>page is Loading</div>}
          {error && <div>{error}</div>}
          {data && <RecipeList recipes={data} />}
        </div>
      </div>
    </>
  );
};

export default Home;

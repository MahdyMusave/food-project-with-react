import React from "react";
import { useFetch } from "../hooks/useFetch";
const Home = () => {
  const { data, isLoading, error } = useFetch("http://localhost:3000/recipes");

  return (
    <>
      <div className="wrapper">
        <div className="container">
          {isLoading && <div>page is Loading</div>}
          {error && <div>{error}</div>}
          <div
            className="content"
            style={{
              padding: "15px",
              border: "none",
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            {data.map((recipe, index) => {
              return (
                <div
                  style={{
                    width: "30%",
                    border: "none",
                    padding: "18px",
                    borderRadius: "10px",
                    boxShadow: "2px 2px 10px 2px rgba(0,0,0,0.10)",
                    opacity: "0.90",
                  }}
                  key={index}
                >
                  <div className="title">{recipe.title}</div>
                  <div className="recipe-body">{recipe.method}</div>
                  <ul>
                    {recipe.ingredients.map((list, index) => {
                      return (
                        <div key={index}>
                          <li>{list}</li>
                        </div>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

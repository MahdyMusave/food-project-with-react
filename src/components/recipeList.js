import React from "react";
import { Link } from "react-router-dom";
// import { useFetch } from "../../hooks/useFetch";
const RecipeList = (props) => {
  // const { data, isLoading, error } = useFetch("http://localhost:3000/recipes");
  // console.log(props.recipes);
  const data = props.recipes;
  return (
    <>
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
              <h2 className="title" style={{ padding: "8px" }}>
                {recipe.title}
              </h2>
              <h4 className="title" style={{ padding: "8px" }}>
                {recipe.cookingTime}
              </h4>
              <p
                className="recipe-body"
                style={{
                  color: "#487987",
                  fontWeight: "bloder",
                  padding: "10px",
                }}
              >
                {recipe.method} ...
              </p>
              <button
                style={{
                  padding: "10px 15px",
                  border: "none",
                  margin: "5px 10px",
                  borderRadius: "10px",
                  backgroundColor: "#ddddffaa",
                  fontSize: "17px",
                  fontWeight: "bold",
                  color: "black",
                  opacity: "0.70",
                }}
              >
                <Link to={`/recipe/${recipe.id}`}>Read More</Link>
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RecipeList;

import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
const Recipe = () => {
  // const params = useParams();
  const { id } = useParams();
  const url = "http://localhost:3000/recipes/" + id;
  const { data, isLoading, error } = useFetch(url);

  return (
    <>
      <div className="food-list">
        <div className="content">
          {isLoading && <div>page is loading</div>}
          {error && <div className="err">{error}</div>}
          <div
            style={{
              width: "90%",
              border: "none",
              padding: "18px",
              borderRadius: "10px",
              boxShadow: "2px 2px 10px 2px rgba(0,0,0,0.10)",
              opacity: "0.90",
              margin: "auto",
            }}
          >
            {data && (
              <>
                <h2 className="title" style={{ padding: "8px" }}>
                  {data.title}
                </h2>
                <h4 className="title" style={{ padding: "8px" }}>
                  {data.cookingTime}
                </h4>
                <div className="recipe">
                  <ul style={{ listStyle: "none" }}>
                    {data &&
                      data.ingredients &&
                      data.ingredients.map((ing, index) => {
                        return (
                          <li style={{ padding: "4px" }} key={index}>
                            {index+1}--{ing}
                          </li>
                        );
                      })}
                  </ul>
                  <p
                    className="recipe-body"
                    style={{
                      color: "#487987",
                      fontWeight: "bloder",
                      padding: "10px",
                    }}
                  >
                    {data.method}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Recipe;

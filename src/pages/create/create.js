import React, { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [cookie_time, setCookie_time] = useState("");
  const [txt, setText] = useState("");
  const [newingredient, setNewIngredient] = useState("");
  const [ingredients, setIngredient] = useState([]);
  const { postData, data } = useFetch("http://localhost:3000/recipes");

  const navgati = useNavigate();
  // const []=useState()
  // const []
  // const handleChange = (e) => {
  //   // console.log(e.target.value);
  //   setTitle(e.target.value);
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e);
    // console.log(title, cookie_time, txt, newingredient);
    //added menu food
    // postData({ title });
    postData({ title, ingredients, method: txt, cookingTime: cookie_time });
  };
  useEffect(() => {
    if (data) {
      // navgati("/");
    }
  }, [data]);
  const handleAddIngredient = (e) => {
    e.preventDefault();
    if (newingredient && !ingredients.includes(newingredient)) {
      setIngredient((prevIngredient) => [...prevIngredient, newingredient]);
    }
    setNewIngredient(" ");
  };
  return (
    <>
      <div className="container">
        <div
          className="form"
          style={{
            border: "none",
            padding: "100px 10px",
            width: "40%",
            margin: "auto",
          }}
        >
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
            action=""
            style={{
              border: "none",
              padding: "10px",
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "column",
              alignItems: "center",
              boxShadow: "2px 2px 10px 2px rgba(0,0,0,0.20)",
            }}
          >
            <div>
              <label htmlFor="food_name">title</label>
              <input
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                type="text"
                placeholder="food_name"
                id="food_name"
                value={title}
              />
              {title}
            </div>
            <div>
              <label htmlFor="food_time">time</label>
              <input
                type="text"
                placeholder="time"
                id="food_time"
                name="food_time"
                onChange={(e) => {
                  setCookie_time(e.target.value);
                }}
                value={cookie_time}
              />
            </div>
            <div>
              <div className="ingredient">
                <label htmlFor="ingredients">ingredients</label>
                <input
                  type="text"
                  placeholder="ingredients"
                  id="ingredients"
                  name="ingredients"
                  value={newingredient}
                  onChange={(e) => {
                    setNewIngredient(e.target.value);
                  }}
                />
              </div>
              <p style={{ padding: "10px" }}>
                cureent ingredient:{" "}
                {ingredients.map((ingred, index) => (
                  <em key={index}>{ingred}, </em>
                ))}
              </p>
              <button
                onClick={(e) => {
                  handleAddIngredient(e);
                }}
                style={{ float: "right" }}
              >
                Add
              </button>
            </div>

            <textarea
              name="txt"
              placeholder="message"
              onKeyUp={(e) => {
                setText(e.target.value);
              }}
            ></textarea>
            <br />
            <button
              style={{
                padding: "9px 14px",
                fontSize: "18px",
                color: "#767676",
                border: "none",
                outline: "none",
                fontWeight: "bold",
                fontFamily: "Arial",
              }}
            >
              create new Recipe
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Create;

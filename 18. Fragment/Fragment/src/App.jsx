import React from "react";
import FoodItems from "./component/FoodItems";
import "./App.css";

import ErrorMessage from "./component/ErrorMessage";

import Container from "./component/Container";

import FoodInput from "./component/FoodInput";

function App() {
  // let foodItems = ["Chia seeds", "Dal", "Vegetable", "Salat", "Ruti"];

  //let foodItems = [];

  // if (foodItems.length === 0) {
  //   return <p>No food items available</p>;
  // }

  let foodItems = ["Chia seeds", "Dal", "Vegetable", "Salat", "Ruti"];

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodInput></FoodInput>
        <FoodItems items={foodItems}></FoodItems>
      </Container>

      <Container>Sakibur Rahman</Container>
    </>
  );
}

export default App;

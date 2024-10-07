import React from "react";
import FoodItems from "./component/FoodItems";

import ErrorMessage from "./component/ErrorMessage";

function App() {
  // let foodItems = ["Chia seeds", "Dal", "Vegetable", "Salat", "Ruti"];

  //let foodItems = [];

  // if (foodItems.length === 0) {
  //   return <p>No food items available</p>;
  // }

  return (
    <React.Fragment>
      <h1>Healthy Food</h1>

      {/* {foodItems.length === 0 ? <p>No food items available</p> : null} */}
      <ErrorMessage></ErrorMessage>
      <FoodItems></FoodItems>
    </React.Fragment>
  );
}

export default App;

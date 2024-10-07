const ErrorMessage = () => {
  let foodItems = ["Chia seeds", "Dal", "Vegetable", "Salat", "Ruti"];

  return <>{foodItems.length === 0 && <p>No food items available</p>}</>;
};

export default ErrorMessage;

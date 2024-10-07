const ErrorMessage = ({ items }) => {
  // let foodItems = ["Chia seeds", "Dal", "Vegetable", "Salat", "Ruti"];

  return <>{items.length === 0 && <p>No food items available</p>}</>;
};

export default ErrorMessage;

import Item from "./Item";

const foodItems = () => {
  let foodItems = ["Chia seeds", "Dal", "Vegetable", "Salat", "Ruti"];
  return (
    <ul className="list-group">
      {foodItems.map((item) => (
        <Item key={item} foodItems={item}></Item>
      ))}
      ;
    </ul>
  );
};

export default foodItems;

import Item from "./Item";

const foodItems = ({ items }) => {
  // let foodItems = ["Chia seeds", "Dal", "Vegetable", "Salat", "Ruti"];
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item key={item} foodItems={item}></Item>
      ))}
      ;
    </ul>
  );
};

export default foodItems;

const item = (props) => {
  return (
    <li className="list-group-item disabled" aria-disabled="true">
      {props.foodItems}
    </li>
  );
};

export default item;

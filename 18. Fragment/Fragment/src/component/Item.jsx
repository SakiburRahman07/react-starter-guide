const item = ({ foodItems }) => {
  return (
    <li className="list-group-item disabled" aria-disabled="true">
      {foodItems}
    </li>
  );
};

export default item;

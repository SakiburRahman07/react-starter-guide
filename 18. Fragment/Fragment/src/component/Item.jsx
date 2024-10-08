import foodItems from "./FoodItems";
import styles from "./item.module.css";

 

const Item = ({ foodItems }) => {

  const handleBuyButton = (event) => {
    console.log(event.target);
    console.log(`${foodItems} is bought`);
  }

  return (
    <>
      <li className={styles["kg-item"]} aria-disabled="true">
        <span className={styles["kg-span"]}>{foodItems}</span>
        <button
          className={"${styles.button} btn btn-info"}
          onClick={(event) => {
            handleBuyButton( event);
          }}
        >
          Buy
        </button>
      </li>
    </>
  );
};

export default Item;

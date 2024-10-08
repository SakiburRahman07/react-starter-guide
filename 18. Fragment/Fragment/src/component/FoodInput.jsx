import css from './FoodInput.module.css';                             

const FoodInput = () => {

  const handleOnChange = (event) => {
    console.log(event.target.value);
  }


return <input className={css.foodInput} onChange={(event) => handleOnChange(event)} type="text" />;
}

export default FoodInput;
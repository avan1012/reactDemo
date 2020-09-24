import React from 'react';
import BurgerIngredient from '../../components/Burger/BurgerIngredient/BurgerIngredient';
import './Burger.css';

const burger = (props) => {
  // console.log('props', props);
  let newIngredients = Object.keys(props.ingredients).map(item => {
    return [...Array(props.ingredients[item])].map((_, index) => {
      return <BurgerIngredient index={index + item} type={item} />;
    })
  }).reduce((res, err) => {
    return res.concat(err)
  }, []);
  // console.log("burger -> newIngredients", newIngredients)
  if (newIngredients.length === 0) {
    newIngredients = <p className="error">Please add some ingredients.</p>
  }
  return (
    <div className={"Burger"}>
      <BurgerIngredient type='bread-top' />
      {newIngredients}
      <BurgerIngredient type='bread-bottom' />

    </div>
  )
}
export default burger;
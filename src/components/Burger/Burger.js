import React from 'react';
import BurgerIngredient from '../../components/Burger/BurgerIngredient/BurgerIngredient';
import classes from './Burger.css';

const burger = (props) => {
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type='cheese' />
    </div>
  )
}
export default burger;
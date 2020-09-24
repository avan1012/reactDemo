import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map(item => {
    return (
      <li key={item}>
        <span style={{ textTransform: 'capitalize' }}>{item}</span>
          :{props.ingredients[item]}
      </li>)
  });
  return (
    <Aux>
      <h3>Your Order:</h3>
      <p>Delicious  burger with following ingredients</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p style={{ color: "blue" }}><strong>Total Price : {props.totalPrice.toFixed(2)}</strong></p>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCancel}>CANCEL</Button>
      <Button btnType="Success" clicked={props.purchaseContinue}>CONTINUE</Button>
    </Aux>
  )
}

export default orderSummary;
import React from 'react';
import './BurgerControls.css';
import BurgerControl from './BurgerControl/BurgerControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Meat', type: 'meat' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Bacon', type: 'bacon' }
]

const burgerControls = (props) => (
  <div className="BurgerControls">
    <p>Current Price : <strong>{props.price.toFixed(2)}</strong></p>
    {controls.map(item => (
      <BurgerControl key={item.label}
        disabled={props.disabled[item.type]}
        removed={() => props.ingredientRemoved(item.type)}
        added={() => props.ingredientAdded(item.type)}
        label={item.label} />
    ))}
    <button
      disabled={!props.purchaseable}
      onClick={props.isModalVisible}
      className="OrderButton">ORDER NOW</button>
  </div>
)

export default burgerControls;
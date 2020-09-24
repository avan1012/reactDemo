import React from 'react';
// import classes from './Button.css';
import "./Button.css"

const button = (props) => {
  return (
    <button
      // className={[classes.Button, classes[props.btnType]].join(' ')}
      className={["Button", props.btnType].join(' ')}
      onClick={props.clicked}
    >{props.children}</button>
  )
}
export default button;
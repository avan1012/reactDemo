import React from 'react';
import './Modal.css'
import Aux from '../../../hoc/Aux';
import Backdrop from '../../UI/Backdrop/Backdrop';

const modal = (props) => (
  <Aux>
    <Backdrop show={props.show} click={props.modalClosed} />
    <div
      className="Modal"
      style={{
        opacity: props.show ? '1' : '0',
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)'
      }}
    >
      {props.children}
    </div>
  </Aux>
)

export default modal;
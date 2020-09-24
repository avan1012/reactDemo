import React from 'react';
import appLogo from '../../assets/images/burger.png'
import "./Logo.css"

const logo = (props) => {
  return (
    <div className="Logo">
      <img src={appLogo} alt="Burger" />
    </div>
  )
}

export default logo;
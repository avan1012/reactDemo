import React from 'react';
import "./Toolbar.css"
import Logo from '../../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => {
  return (
    <header className="Toolbar">
      <div>logo</div>
      <Logo />
      <nav>
        <NavigationItems />
      </nav>
    </header>
  )
}
export default toolbar;
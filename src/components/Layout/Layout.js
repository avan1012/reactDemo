import React from 'react';
import Aux from '../../hoc/Aux';
import './Layout.css'
import Toolbar from '../UI/Navigation/Toolbar/Toolbar';
import SideDrawer from '../UI/Navigation/SideDrawer/SideDrawer';

const layout = (props) => (
  <Aux>
    <Toolbar />
    <SideDrawer />
    <main className="Container">
      {props.children}
    </main>
  </Aux>
)
export default layout;
import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css'

const layout = (props) => (
  <Aux>
    <div>Toolbar etc..</div>
    <h1>new data</h1>
    <main className={classes.container}>
      {props.children}
    </main>
  </Aux>
)
export default layout;
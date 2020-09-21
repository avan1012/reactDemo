import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
  render() {
    return (
      <div>
        <Aux>
          <Burger />
        </Aux>
      </div>
    )
  }
}
export default BurgerBuilder;
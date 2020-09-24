import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BurgerControls/BurgerControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENTS_PRICE = {
  salad: 1.2,
  cheese: 0.35,
  meat: 4.2,
  bacon: 2
}
class BurgerBuilder extends Component {
  constructor() {
    super();
    this.state = {
      ingredients: {
        salad: 0,
        cheese: 0,
        meat: 0,
        bacon: 0
      },
      totalPrice: 4,
      purchaseable: false,
      isModalVisible: false
    }
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredient = {
      ...this.state.ingredients
    }
    updatedIngredient[type] = updatedCount;
    const priceDeduction = INGREDIENTS_PRICE[type];
    const newPrice = this.state.totalPrice + priceDeduction;
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredient
    })
    this.updatedPurchaseState(updatedIngredient);
  }

  updatedPurchaseState(ingredients) {
    const sum = Object.keys(ingredients).map(item => {
      return ingredients[item]
    }).reduce((sum, ele) => {
      return sum + ele;
    }, 0)
    this.setState({
      purchaseable: sum > 0
    })
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredient = {
      ...this.state.ingredients
    }
    updatedIngredient[type] = updatedCount;
    const priceAddition = INGREDIENTS_PRICE[type];
    const newPrice = this.state.totalPrice - priceAddition;
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredient
    })
    this.updatedPurchaseState(updatedIngredient);
  }

  modalVisible = () => {
    this.setState({
      isModalVisible: true
    })
  }
  purchaseCancel = () => {
    this.setState({
      isModalVisible: false
    })
  }

  purchaseContinue = () => {
    alert('you continue.')
  }

  render() {
    const disableInfo = { ...this.state.ingredients }
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0
    }
    return (
      <div>
        <Aux>
          <Modal show={this.state.isModalVisible} modalClosed={this.purchaseCancel}>
            <OrderSummary
              totalPrice={this.state.totalPrice}
              purchaseCancel={this.purchaseCancel}
              purchaseContinue={this.purchaseContinue}
              ingredients={this.state.ingredients} />
          </Modal>
          <Burger ingredients={this.state.ingredients} />
          <BurgerControls
            price={this.state.totalPrice}
            purchaseable={this.state.purchaseable}
            disabled={disableInfo}
            ingredientRemoved={this.removeIngredientHandler}
            ingredientAdded={this.addIngredientHandler}
            isModalVisible={this.modalVisible}
          />
        </Aux>
      </div>
    )
  }
}
export default BurgerBuilder;
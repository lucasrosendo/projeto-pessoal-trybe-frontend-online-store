import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      cart: [],
      empty: true,
    };
  }

  addToCart = (product) => {
    this.setState((prevState) => ({
      cart: [...prevState.cart, product],
      empty: false,
    }));
  };

  render() {
    const { cart, empty } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={ () => <Home addToCart={ this.addToCart } /> } />
          <Route
            exact
            path="/shoppingcart"
            render={ () => <ShoppingCart cart={ cart } empty={ empty } /> }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

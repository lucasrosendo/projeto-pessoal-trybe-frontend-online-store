import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import ShoppingCart from './pages/ShoppingCart';

export default class App extends Component {
  constructor(props) {
    super(props);

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

  cartItemRemove = (id) => {
    const { cart } = this.state;
    const removeCart = cart.filter((remove) => remove.id !== id);
    this.setState({
      cart: removeCart,
    });
  }

  render() {
    const { cart, empty } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={ () => <Home addToCart={ this.addToCart } /> } />
          <Route exact path="/shoppingcart/:id" component={ ShoppingCart } />
          <Route
            exact
            path="/shoppingcart"
            render={ () => (
              <ShoppingCart
                cart={ cart }
                empty={ empty }
                cartItemRemove={ this.cartItemRemove }
              />) }
          />
          <Route
            exact
            path="/product/:id/:title"
            render={ ({ match }) => (
              <ProductDetails
                match={ match }
                addToCart={ this.addToCart }
              />) }
          />
          <Route />
        </Switch>
      </BrowserRouter>
    );
  }
}

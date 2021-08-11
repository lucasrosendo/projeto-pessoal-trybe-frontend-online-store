import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends Component {
  cartProduct = ({ id, title, thumbnail }) => (
    <div key={ id }>
      <div>
        <img src={ thumbnail } alt="imagem" />
        <div>
          <h4 data-testid="shopping-cart-product-name">{title}</h4>
          <h5 data-testid="shopping-cart-product-quantity">1</h5>
        </div>
      </div>
    </div>
  );

  render() {
    const { cart, empty } = this.props;
    const productCart = (
      <div>
        { cart.map((product) => this.cartProduct(product))}
      </div>);

    const emptyCart = (
      <h1
        data-testid="shopping-cart-empty-message"
      >
        Seu carrinho está vazio
      </h1>);

    return (
      <div>
        { empty ? emptyCart : productCart }
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  empty: PropTypes.bool.isRequired,
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ShoppingCart;

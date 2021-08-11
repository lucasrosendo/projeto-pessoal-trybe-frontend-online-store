import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends Component {
  render() {
    const { cart, empty, cartItemRemove } = this.props;

    const productCart = (
      <div>
        { cart.map(({ id, thumbnail, title, price }) => (
          <div key={ id }>
            <div>
              <img src={ thumbnail } alt="imagem" />
              <div>
                <h4 data-testid="shopping-cart-product-name">{title}</h4>
                <h5 data-testid="shopping-cart-product-quantity">1</h5>
                <h5>{price}</h5>
              </div>
            </div>
            <button
              type="button"
              onClick={ () => cartItemRemove(id) }
            >
              X
            </button>
          </div>
        ))}
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
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  empty: PropTypes.bool.isRequired,
  cartItemRemove: PropTypes.func.isRequired,
};

export default ShoppingCart;

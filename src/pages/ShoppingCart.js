import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends Component {
  render() {
    const { cart, empty, cartItemRemove, handleQuantity } = this.props;

    const productCart = (
      <div>
        { cart.map(({ id, thumbnail, title, price, quantity }) => (
          <div key={ id }>
            <div>
              <img src={ thumbnail } alt="imagem" />
              <div>
                <h4 data-testid="shopping-cart-product-name">{title}</h4>
                <input
                  data-testid="product-increase-quantity"
                  type="button"
                  onClick={ (event) => handleQuantity(event, id) }
                  value="+"
                />
                <h5 data-testid="shopping-cart-product-quantity">{quantity}</h5>
                <input
                  data-testid="product-decrease-quantity"
                  type="button"
                  onClick={ (event) => handleQuantity(event, id) }
                  value="-"
                />
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
  handleQuantity: PropTypes.func.isRequired,
};

export default ShoppingCart;

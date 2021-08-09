import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductList extends Component {
  render() {
    const { product: { title, price, thumbnail } } = this.props;
    return (
      <div data-testid="product">
        <div>
          <img src={ thumbnail } alt="imagem" />
          <div>
            <h4>{title}</h4>
            <h5>{price}</h5>
          </div>
        </div>
      </div>
    );
  }
}

ProductList.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
  }).isRequired,
};

export default ProductList;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductList extends Component {
  render() {
    const { product: { id, title, price, thumbnail } } = this.props;
    return (
      <div data-testid="product">
        <div>
          <img src={ thumbnail } alt="imagem" />
          <div>
            <h4>{title}</h4>
            <h5>{price}</h5>
          </div>
          <Link
            data-testid="product-detail-link"
            to={ `/product/${id}/${encodeURIComponent(title)}` }
          >
            Ver Detalhe
          </Link>
        </div>
      </div>
    );
  }
}

ProductList.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
  }).isRequired,
};

export default ProductList;

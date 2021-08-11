import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
  render() {
    const { product: { title, price, thumbnail } } = this.props;
    const { product, addToCart } = this.props;
    
    return (
      <div data-testid="product">
        <div>
          <img src={ thumbnail } alt="imagem" />
          <div>
            <h4>{title}</h4>
            <h5>{price}</h5>
          </div>
          <button
            type="button"
            data-testid="product-add-to-cart"
            onClick={ () => addToCart(product) }
          >
            Adicionar ao carrinho
          </button>
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

ProductCard.propTypes = {
  addToCart: PropTypes.func.isRequired,
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
  }).isRequired,
};

export default ProductCard;

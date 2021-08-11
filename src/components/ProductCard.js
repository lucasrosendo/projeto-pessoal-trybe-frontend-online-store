import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
  render() {
    const { product: { id, title, price, thumbnail } } = this.props;
    const { product, addToCart } = this.props;
    
    return (
      <div data-testid="product">
        <div className="card">
          <img src={ thumbnail } alt="imagem" className="card-img" />
          <div>
            <h4 className="title-card">{title}</h4>
            <h5 className="price">
              R$
              {price}
            </h5>
          </div>
          <button
            type="button"
            data-testid="product-add-to-cart"
            onClick={ () => addToCart(product) }
          >
            Adicionar ao carrinho
          </button>
          <Link
            className="card-btn"
            data-testid="product-detail-link"
            to={ `/product/${id}/${encodeURIComponent(title)}` }
          >
            Ver Detalhes
          </Link>
        </div>
      </div>
    );
  }
}

ProductCard.propTypes = {
  addToCart: PropTypes.func.isRequired,
  product: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
  }).isRequired,
};

export default ProductCard;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductList extends Component {
  render() {
    const { product: { id, title, price, thumbnail } } = this.props;
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

ProductList.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
  }).isRequired,
};

export default ProductList;

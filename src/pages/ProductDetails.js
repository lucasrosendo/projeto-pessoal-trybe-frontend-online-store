import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as categoryAPI from '../services/api';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productDetails: [],
    };
  }

  componentDidMount() {
    this.fetchProduct();
  }

  fetchProduct = () => {
    const { match: { params: { title } } } = this.props;
    categoryAPI
      .getProductsFromCategoryAndQuery('', title).then((data) => {
        this.setState({
          productDetails: data.results,
        });
      });
  }

  render() {
    const { productDetails } = this.state;
    const { match: { params: { id } } } = this.props;
    const product = productDetails.filter((productDetail) => productDetail.id === id);
    return (
      <div className="card-details-body">
        <Link to="/" className="home-btn">
          Home
          {' '}
          <i className="fas fa-home" />
        </Link>
        <br />
        <Link to="/shoppingcart" data-testid="shopping-cart-button" className="cart">
          Carrinho de Compras
        </Link>
        {product.map((infoProduct) => (
          <div key={ infoProduct.id } className="card-details">
            <div>
              <h3 data-testid="product-detail-name">
                { infoProduct.title }
                { ` - R$ ${infoProduct.price}` }
              </h3>
              <img
                src={ infoProduct.thumbnail }
                alt={ infoProduct.title }
                className="card-details-img"
              />
            </div>
            <div>
              <h4>Especificações Técnicas</h4>
              <ul>
                <li>1</li>
                <li>2</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      thumbnail: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductDetails;
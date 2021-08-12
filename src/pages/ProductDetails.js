import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as categoryAPI from '../services/api';
import FormCommentary from '../components/FormCommentary';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productDetails: [],
      email: '',
      message: '',
      commentarys: [],
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

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  addCommentary = (e) => {
    e.preventDefault();
    const { email, message } = this.state;
    if (email !== '') {
      this.setState((previous) => ({
        commentarys: [...previous.commentarys, { email, message }],
      }));
    }
  }

  render() {
    const { productDetails, commentarys } = this.state;
    const { match: { params: { id } } } = this.props;
    const { addToCart } = this.props;
    const product = productDetails.filter((productDetail) => productDetail.id === id);
    console.log(product);
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
              <button
                type="button"
                data-testid="product-detail-add-to-cart"
                onClick={ () => addToCart(product[0]) }
              >
                Adicionar ao Carrinho
              </button>
            </div>
            <FormCommentary
              handleChange={ this.handleChange }
              addCommentary={ this.addCommentary }
            />
            { commentarys.map((commentary, index) => (
              <div key={ index }>
                <p>{ commentary.email }</p>
                <p>{ commentary.message }</p>
              </div>
            )) }
          </div>
        ))}
      </div>
    );
  }
}

ProductDetails.propTypes = {
  addToCart: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      thumbnail: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductDetails;

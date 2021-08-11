import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import Category from '../components/Category';
import ProductList from './ProductList';

import * as categoryAPI from '../services/api';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      productText: '',
      products: [],
      categoryText: '',
    };
  }

  componentDidMount() {
    categoryAPI.getCategories().then((data) => {
      this.setState({
        categories: data,
      });
    });
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick = (e) => {
    e.preventDefault();
    const { target: { value } } = e;
    const { productText } = this.state;
    categoryAPI
      .getProductsFromCategoryAndQuery(value, productText).then((data) => {
        this.setState({
          products: data.results,
        });
      });
  }

  render() {
    const { addToCart } = this.props;
    const { categories, productText, products, categoryText } = this.state;
    return (
      <div>
        <SearchBar
          productText={ productText }
          productTextChange={ this.handleChange }
          handleClick={ this.handleClick }
        />
        <Link to="/shoppingcart" data-testid="shopping-cart-button">
          Carrinho de Compras
        </Link>
        <Category
          categoryTextChange={ this.handleChange }
          categoryText={ categoryText }
          categories={ categories }
          handleClick={ this.handleClick }
        />
        <ProductList products={ products } addToCart={ addToCart } />
      </div>
    );
  }
}

Home.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default Home;

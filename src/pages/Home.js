import React, { Component } from 'react';
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
    };
  }

  componentDidMount() {
    categoryAPI.getCategories().then((data) => {
      this.setState({
        categories: data,
      });
    });
  }

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleClick = (e) => {
    e.preventDefault();
    const { productText } = this.state;
    categoryAPI.getProductsFromCategoryAndQuery('', productText).then((data) => {
      this.setState({
        products: data.results,
      });
    });
  }

  render() {
    const { categories, productText, products } = this.state;
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
        <Category categories={ categories } />
        <ProductList products={ products } />
      </div>
    );
  }
}

export default Home;

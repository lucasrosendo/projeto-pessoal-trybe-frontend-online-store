import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import Category from '../components/Category';

import * as categoryAPI from '../services/api';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    categoryAPI.getCategories().then((data) => {
      this.setState({
        categories: data,
      });
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <SearchBar />
        <Link to="/shoppingcart" data-testid="shopping-cart-button">
          Carrinho de Compras
        </Link>
        <Category categories={ categories } />
      </div>
    );
  }
}

export default Home;

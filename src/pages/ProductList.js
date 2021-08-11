import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../components/ProductCard';

class ProductList extends Component {
  render() {
    const { products, addToCart } = this.props;
    return (
      <div className="lista">
        {products.map((product) => (
          <ProductCard
            key={ product.id }
            product={ product }
            addToCart={ addToCart }
          />))}
      </div>
    );
  }
}

ProductList.propTypes = {
  addToCart: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductList;

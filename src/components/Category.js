import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Category extends Component {
  render() {
    const { categories } = this.props;
    return (
      <div>
        <ul>
          Categorias:
          {categories
            .map((category) => (
              <li
                key={ category.id }
                data-testid="category"
              >
                {category.name}
              </li>))}
        </ul>
      </div>
    );
  }
}

Category.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Category;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Category extends Component {
  render() {
    const { categories, handleClick } = this.props;
    return (
      <div className="nav-bar">
        <form action="">
          <ul style={ { listStyle: 'none' } } className="catalog">
            Categorias:
            {categories
              .map((category) => (
                <li
                  className="catalog-btn"
                  key={ category.id }
                >
                  <label
                    className="catalog"
                    style={ { cursor: 'pointer' } }
                    data-testid="category"
                    htmlFor={ category.id }
                  >
                    <input
                      style={ { display: 'none' } }
                      type="radio"
                      name="categoryText"
                      value={ category.id }
                      onClick={ handleClick }
                      id={ category.id }
                    />
                    { category.name }
                  </label>
                </li>))}
          </ul>
        </form>
      </div>
    );
  }
}

Category.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Category;

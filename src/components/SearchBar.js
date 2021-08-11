import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { productText, productTextChange, handleClick } = this.props;
    return (
      <div className="searchbar">
        <main className="main-search">
          <form action="">
            <input
              className="search-input"
              data-testid="query-input"
              type="text"
              name="productText"
              value={ productText }
              onChange={ productTextChange }
              placeholder="Digite algum termo de pesquisa ou escolha uma categoria."
            />
            <button
              type="submit"
              data-testid="query-button"
              onClick={ handleClick }
              className="search-btn"
            >
              Pesquisar
            </button>
          </form>
          <div>
            <span data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </span>
          </div>
        </main>
      </div>
    );
  }
}

SearchBar.propTypes = {
  productText: PropTypes.string.isRequired,
  productTextChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default SearchBar;

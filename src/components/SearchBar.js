import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div>
        <main>
          <input
            type="text"
          />
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

export default SearchBar;

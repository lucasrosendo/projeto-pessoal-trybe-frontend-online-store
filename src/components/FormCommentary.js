import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormCommentary extends Component {
  render() {
    const { addCommentary, handleChange } = this.props;
    return (
      <form>
        <label htmlFor="email">
          <input
            id="email"
            type="text"
            placeholder="Email"
            name="email"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="message">
          <textarea
            data-testid="product-detail-evaluation"
            id="message"
            placeholder="Mensagem (opcional)"
            name="message"
            onChange={ handleChange }
          />
        </label>
        <button type="submit" onClick={ addCommentary }>Avaliar</button>
      </form>
    );
  }
}

FormCommentary.propTypes = {
  addCommentary: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default FormCommentary;

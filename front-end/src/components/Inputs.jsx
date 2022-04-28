import PropTypes from 'prop-types';
import React from 'react';

function Input(props) {
  const { type, name, placeholder, testid, value, onChange } = props;
  return (
    <label htmlFor={ name }>
      { name}
      :
      <input
        type={ type }
        name={ name }
        id={ name }
        placeholder={ placeholder }
        data-testid={ testid }
        value={ value }
        onChange={ onChange }
      />
    </label>
  );
}

Input.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  testid: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
}.isRequired;

export default Input;

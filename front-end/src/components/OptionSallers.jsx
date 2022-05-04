import React from 'react';
import PropTypes from 'prop-types';

function OptionsSallers({ saller }) {
  return (
    <option
      value={ saller }
      data-testid="customer_checkout__select-seller"
    >
      {saller}
    </option>
  );
}

OptionsSallers.propTypes = {
  saller: PropTypes.string,
}.isRequired;

export default OptionsSallers;

import React from 'react';
import PropTypes from 'prop-types';

function OptionsSellers({ seller, sellerId, onChange }) {
  return (
    <option
      value={ sellerId }
      data-testid="customer_checkout__select-seller"
      onChange={ onChange }
    >
      {seller}
    </option>
  );
}

OptionsSellers.propTypes = {
  seller: PropTypes.string,
}.isRequired;

export default OptionsSellers;

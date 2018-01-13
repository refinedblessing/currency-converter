import React from 'react';
import PropTypes from 'prop-types';

const SelectBox = (props) => {
  return (
    <select name={props.name} value={props.countryCode} onChange={props.handleSelectChange} className="SelectBox">
      {
        props.countryCodes.map(countryCode => (
          <option value={countryCode} key={countryCode}>{countryCode}</option>
        ))
      }
    </select>
  );
};

SelectBox.propTypes = {
  countryCodes: PropTypes.array,
  handleSelectChange: PropTypes.func,
  countryCode: PropTypes.string,
  name: PropTypes.string
};

export default SelectBox;
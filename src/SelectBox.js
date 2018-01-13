import React from 'react';
import PropTypes from 'prop-types';

const SelectBox = (props) => {
  return (
    <select name={props.name} value={props.value} onChange={props.handleChange} className="SelectBox">
      {
        props.options.map(value => (
          <option value={value} key={value}>{value}</option>
        ))
      }
    </select>
  );
};

SelectBox.propTypes = {
  options: PropTypes.array,
  handleChange: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string
};

export default SelectBox;
import React, { Component } from 'react';
import SelectBox from './SelectBox';
import PropTypes from 'prop-types';
import money from 'money';

const convertMoney = (cash, from, to) => {
  return money.convert(cash, {from, to}).toFixed(2);
};

class ConverterBox extends Component {
  state = {
    i1: 1,
    s1: 'USD',
    s2: 'USD',
    i2: 1
  };

  handleSelectChange = (e) => {
    const select = e.target;
    let inputToConvert, inputUpdate, code;
    if(select.name === 's1') {
      inputToConvert = 'i1';
      inputUpdate = 'i2';
      code = 's2';
    } else {
      inputToConvert = 'i2';
      inputUpdate = 'i1';
      code = 's1';
    }

    this.setState(state => ({
      [inputUpdate]: convertMoney(state[inputToConvert], select.value, state[code]),
      [select.name]: select.value
    }));
  }

  handleChange = (e) => {
    const input = e.target;
    const inputValue = parseFloat(input.value);
    if(!!inputValue) {
      let fromCode, inputToUpdate, toCode;
      if(input.name === 'i1') {
        inputToUpdate = 'i2';
        toCode = 's2';
        fromCode = 's1';
      } else {
        inputToUpdate = 'i1';
        toCode = 's1';
        fromCode = 's2';
      }
      this.setState(state => ({
        [inputToUpdate]: convertMoney(inputValue, state[fromCode], state[toCode]),
        [input.name]: inputValue
      }));
    } else this.setState(state => ({
      [input.name]: state[input.name]
    }));
  }

  render () {
    const countryCodes = Object.keys(this.props.rates);
    const { s1, s2, i1, i2 } = this.state;
    return (
      <div className="ConverterBox">
        <div>
          <SelectBox options={countryCodes} name={'s1'} value={s1} handleChange={this.handleSelectChange}/>
          <input value={i1} onChange={this.handleChange} name={'i1'}/>        
        </div>
        <div>
          <SelectBox options={countryCodes} name={'s2'} value={s2} handleChange={this.handleSelectChange}/>
          <input value={i2} onChange={this.handleChange} type="number" name={'i2'} />        
        </div>
        <div>
          <p>{`${s1} ${i1} = ${s2} ${i2}`}</p>
        </div>
      </div>
    );
  }
}

ConverterBox.propTypes = {
  rates: PropTypes.object,
  value: PropTypes.string
};

export default ConverterBox;
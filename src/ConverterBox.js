import React, { Component } from 'react';

class ConverterBox extends Component {
  state = { inputValue: 0, fromCode: 'USA', toCode: 'EUR' };

  handleInputChange = (e) => {
    const inputValue = parseFloat(e.target.value);
    this.setState(prevState => ({
      inputValue
    }));
  }

  render () {
    return (
      <div className="ConverterBox">
        <div>
          <input value={this.state.inputValue} onChange={this.handleInputChange} type="number"/>
          
        </div>
      </div>
    );
  }
}

export default ConverterBox;
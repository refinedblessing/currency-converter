import React, { Component } from 'react';
import ConverterBox from './ConverterBox';
import money from 'money';
import axios from 'axios';
import './App.css';


class App extends Component {
  state = { loading: true, rates: {} };

  componentDidMount () {
    axios.get('https://api.fixer.io/latest')
      .then(res => {
        money.rates = res.data.rates;
        this.setState(prevState => ({
          rates: res.data.rates,
          loading: false
        }));
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Currency Converter</h1>
        </header>
        {
          this.state.loading ? <p>Loading your Converter...</p> : <ConverterBox />
        }
      </div>
    );
  }
}

export default App;

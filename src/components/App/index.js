/* eslint-disable react/destructuring-assignment */
/* eslint-disable prefer-destructuring */
import React from 'react';

import Header from 'src/components/Header';
import Toggler from 'src/components/Toggler';
import Currencies from 'src/components/Currencies';
import Result from 'src/components/Result';

import './app.scss';

import currencyData from 'src/data/currencies';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      isOpen: false,

      baseAmount: 1,

      selectedCurrency: 'United States Dollar',
    };

    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleCurrencyClick = this.handleCurrencyClick.bind(this);
    this.handleInputAmountChange = this.handleInputAmountChange.bind(this);
  }

  componentDidMount() {
    document.title = `Conversion de euros vers ${this.state.selectedCurrency}`;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.selectedCurrency !== this.state.selectedCurrency) {
      document.title = `Conversion de euros vers ${this.state.selectedCurrency}`;
    }
  }

  handleButtonClick() {
    const { isOpen } = this.state;

    this.setState({

      isOpen: !isOpen,
    });
  }

  handleCurrencyClick(newCurrency) {
    this.setState({
      selectedCurrency: newCurrency.name,
    });
  }

  handleInputAmountChange(event) {
    if (Number.isNaN(event.target.valueAsNumber)) {
      this.setState({
        baseAmount: 1,
      });
    }
    else {
      this.setState({
        baseAmount: event.target.valueAsNumber,
      });
    }
  }

  makeConversion() {
    const { baseAmount, selectedCurrency } = this.state;

    const foundCurrency = currencyData.find(
      (currency) => currency.name === selectedCurrency,
    );

    const rate = foundCurrency.rate;
    const result = rate * baseAmount;

    return Number(result.toFixed(2));
  }

  render() {
    const { baseAmount, isOpen, selectedCurrency } = this.state;

    return (
      <div className="app">
        <Header
          baseAmount={baseAmount}
          onAmountChange={this.handleInputAmountChange}
        />
        <Toggler
          isOpen={isOpen}
          onButtonClick={this.handleButtonClick}
        />
        <Currencies
          isOpen={isOpen}
          currencyList={currencyData}
          onCurrencyClick={this.handleCurrencyClick}
        />
        <Result amount={this.makeConversion()} selectedCurrency={selectedCurrency} />
      </div>
    );
  }
}

export default App;

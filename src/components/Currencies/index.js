import PropTypes from 'prop-types';
import './currencies.scss';

function Currencies({ isOpen, currencyList, onCurrencyClick }) {
  return (
    <section className={isOpen ? 'currencies currencies--open' : 'currencies'}>
      <h2 className="currencies__title">Currencies</h2>
      <ul className="currencies__list">
        {
          currencyList.map((currency) => (
            <li
              key={currency.name}
              className="currencies__list__item"
              onClick={() => onCurrencyClick(currency)}
            >
              {currency.name}
            </li>
          ))
        }
      </ul>
    </section>
  );
}

Currencies.propTypes = {
  currencyList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      rate: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  onCurrencyClick: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default Currencies;

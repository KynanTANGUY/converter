import PropTypes from 'prop-types';
import './result.scss';

function Result({ amount, selectedCurrency }) {
  return (
    <section className="result">
      <p className="result__amount">{amount}</p>
      <p className="result__currency">{selectedCurrency}</p>
    </section>
  );
}

Result.propTypes = {
  amount: PropTypes.number.isRequired,
  selectedCurrency: PropTypes.string.isRequired,
};

export default Result;

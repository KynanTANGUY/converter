import PropTypes from 'prop-types';

import './header.scss';

function Header({ baseAmount, onAmountChange }) {
  return (
    <header className="header">
      <h1 className="header__title">Converter</h1>
      <input
        className="header__input"
        type="number"
        min="1"
        placeholder="Montant en euros"
        value={baseAmount}
        onChange={onAmountChange}
      />
    </header>
  );
}

Header.propTypes = {
  baseAmount: PropTypes.number.isRequired,
  onAmountChange: PropTypes.func.isRequired,
};

export default Header;

import PropTypes from 'prop-types';
import './toggler.scss';

function Toggler({ isOpen, onButtonClick }) {
  return (
    <button
      type="button"
      className={isOpen ? 'toggler toggler--open' : 'toggler'}
      onClick={onButtonClick}
    >
      <div className="toggler__inner" />
    </button>
  );
}

Toggler.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export default Toggler;

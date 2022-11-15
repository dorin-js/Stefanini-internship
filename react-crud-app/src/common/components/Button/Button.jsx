import React from 'react';
import PropTypes from 'prop-types';
import classes from './Button.module.css';

const Button = ({ value, onClick, disabled }) => (
  <button
    type="submit"
    className={classes.button}
    onClick={onClick}
    disabled={disabled}
  >
    <span className={classes.buttonText}>{value}</span>
  </button>
);

Button.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};
Button.defaultProps = {
  onClick: undefined,
  disabled: false,
};

export default Button;

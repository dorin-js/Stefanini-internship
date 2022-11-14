import React from 'react';
import PropTypes from 'prop-types';
import classes from './Button.module.css';

const Button = ({ value, onClick }) => (
  <button
    type="submit"
    className={classes.button}
    onClick={onClick}
  >
    <span className={classes.buttonText}>{value}</span>
  </button>
);

Button.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;

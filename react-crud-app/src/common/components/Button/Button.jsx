import React from 'react';
import PropTypes from 'prop-types';
import classes from './Button.module.css';

const Button = ({ value, onClick }) => (
  <button type="submit" className={classes.button} onClick={onClick}>
    {value}
  </button>
);

Button.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
Button.defaultProps = {
  onClick: undefined,
};

export default Button;

import React from "react";
import classes from "./Button.module.css";

const Button = ({ type, value, onClick }) => (
  <button className={classes.button} type={type ?? ""} onClick={onClick}>
    {value}
  </button>
);

export default Button;

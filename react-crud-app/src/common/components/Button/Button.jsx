import React from "react";
import classes from "./Button.module.css";

const Button = ({ content, type, onClick }) => (
  <button className={classes.button} type={type ?? ""} onClick={onClick}>
    {content}
  </button>
);

export default Button;

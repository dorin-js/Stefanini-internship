import React from "react";
import classes from "./Modal.module.css";

const Modal = ({ children, onClose }) => (
  <div className={classes.modal}>
    <div className={classes.closeIcon} onClick={onClose}>
      X
    </div>
    {children}
  </div>
);

export default Modal;

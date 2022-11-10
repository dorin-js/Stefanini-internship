import React from "react";
import classes from "./Modal.module.css";

const Modal = ({ children, setOn }) => {
  const closeForm = () => {
    setOn(false);
  };

  return (
    <div className={classes.modal}>
      <div className={classes.closeIcon} onClick={closeForm}>
        X
      </div>
      {children}
    </div>
  );
};

export default Modal;

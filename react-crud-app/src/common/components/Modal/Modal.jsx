import React from 'react';
import PropTypes from 'prop-types';
import classes from './Modal.module.css';

const Modal = ({ title, children, onClose }) => (
  <div className={classes.modal}>
    <span className={classes.modalTitle}>{title}</span>
    <button type="button" className={classes.closeIcon} onClick={onClose}>
      X
    </button>
    {children}
  </div>
);

Modal.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
  onClose: PropTypes.func,
};
Modal.defaultProps = {
  title: '',
  onClose: () => undefined,
};

export default Modal;

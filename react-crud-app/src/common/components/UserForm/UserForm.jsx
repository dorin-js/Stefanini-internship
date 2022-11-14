/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classes from './UserForm.module.css';
import userApi from '../../services/usersApi';
import { Snackbar } from '../Snackbar';
import { Button } from '../Button';

const defaultFormData = {
  name: '',
  lastname: '',
  email: '',
  birth: '',
};

const CreateForm = ({ setVisible, onCreateUser }) => {
  const [form, setForm] = useState(defaultFormData);
  const [loading, setLoading] = useState();
  const [error, setError] = useState(null);
  const [postedStats, setPostedStats] = useState({ status: '', message: '' });

  const createUser = (body) => {
    userApi.postUser(body)
      .then(({ items }) => {
        onCreateUser((prevState) => [...items, ...prevState]);
        setPostedStats({ status: 'success', message: 'Posted successfuly!' });
        setVisible(false);
      })
      .catch((err) => {
        setError(err.message);
        setPostedStats({ status: 'error', message: err });
      });
  };

  const onValueChanged = (value) => {
    setForm({ ...form, ...value });
  };

  const onFormSubmited = (e) => {
    e.preventDefault();
    createUser(form);
  };

  return (
    <>
      <form
        name="form"
        className={classes.createUserForm}
        onSubmit={onFormSubmited}
      >
        <input
          required
          placeholder="First Name"
          value={form.name}
          // eslint-disable-next-line jsx-a11y/no-autofocus
          onChange={(e) => onValueChanged({ name: e.target.value })}
        />
        <input
          required
          placeholder="Last Name"
          value={form.lastname}
          onChange={(e) => onValueChanged({ lastname: e.target.value })}
        />
        <input
          type="email"
          required
          placeholder="Email"
          value={form.email}
          onChange={(e) => onValueChanged({ email: e.target.value })}
        />
        <input
          type="date"
          required
          placeholder="Date of birth"
          value={form.birth}
          onChange={(e) => onValueChanged({ birth: e.target.value })}
        />
        <div className="buttonsContainer">
          <Button type="submit" value="Create User" />
          <Button onClick={() => setVisible(false)} value="Cancel" />
        </div>
      </form>
      {
        postedStats.status
        && <Snackbar type={postedStats.status} message={postedStats.message} timeout={3} />
      }
    </>
  );
};

CreateForm.propTypes = {
  onCreateUser: PropTypes.func.isRequired,
  setVisible: PropTypes.func,
};
CreateForm.defaultProps = {
  setVisible: () => undefined,
};

export default CreateForm;

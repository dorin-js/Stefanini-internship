import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '..';
import classes from './CreateForm.module.css';
import userApi from '../../services/usersApi';

const defaultFormData = {
  name: '',
  lastname: '',
  email: '',
  birth: '',
};

const CreateForm = ({ setVisible, onCreateUser }) => {
  const [form, setForm] = useState(defaultFormData);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);

  const createUser = (body) => {
    userApi.postUser(body)
      .then(({ items }) => {
        onCreateUser((prevState) => [...items, ...prevState]);
        setVisible(false);
      })
      .catch((err) => {
        setError(err);
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
  );
};

CreateForm.propTypes = {
  onCreateUser: PropTypes.func,
  setVisible: PropTypes.func,
};
CreateForm.defaultProps = {
  onCreateUser: () => undefined,
  setVisible: () => undefined,
};

export default CreateForm;

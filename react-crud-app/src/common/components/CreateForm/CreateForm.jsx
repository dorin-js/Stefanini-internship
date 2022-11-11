import React, { useState } from "react";
import classes from "./CreateForm.module.css";
import Button from "../Button/Button";
import { useRef } from "react";
import { UsersApi } from "../../services/usersApi";

const defaultFormData = {
  name: "",
  lastname: "",
  email: "",
  birth: "",
};

const userApi = new UsersApi();

const CreateForm = ({ setOn, setUsers }) => {
  const [form, setForm] = useState(defaultFormData);
  const [error, setError] = useState(null);
  const inputRef = useRef(null);

  const executePostNewUser = async (body) => {
    try {
      userApi.postUser(body).then(({ items }) => {
        setUsers((prevState) => [...items, ...prevState]);
      });
    } catch (error) {
      setError(error.message);
    }
  };

  // useEffect(() => {
  //   console.log("mounted");
  //   inputRef.current.focus();

  //   if (inputRef.current) {
  //     console.log("if ref", true);
  //     inputRef.current.focus();
  //   }
  //   return () => console.log("unmounted");
  // }, []);

  const onValueChanged = (value) => {
    setForm({ ...form, ...value });
  };

  const onFormSubmited = (e) => {
    e.preventDefault();
    executePostNewUser(form);
    setOn(false);
  };

  return (
    <form
      name="form"
      className={classes.createUserForm}
      onSubmit={onFormSubmited}
    >
      <input
        ref={inputRef}
        required
        placeholder="First Name"
        value={form.name}
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
        <Button onClick={() => setOn(false)} value="Cancel" />
      </div>
    </form>
  );
};

export default CreateForm;

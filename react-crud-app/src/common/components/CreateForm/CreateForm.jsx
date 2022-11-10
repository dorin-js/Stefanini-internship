import React, { useState } from "react";
import classes from "./CreateForm.module.css";
import Button from "../Button/Button";
import { useFetch } from "../../hooks/useFetch";

const defaultData = {
  name: "",
  lastname: "",
  email: "",
  birth: "",
};

const CreateForm = ({ setOn }) => {
  const [form, setFrom] = useState(defaultData);
  const { loading, error, execute } = useFetch();

  const onValueChanged = (value) => {
    setFrom({ ...form, ...value });
  };

  const onFormSubmited = (e) => {
    e.preventDefault();
    console.log("init", loading);
    execute("post", form);
    console.log("done", loading);
    setOn(false);
  };

  return (
    <form
      name="form"
      className={classes.createUserForm}
      onSubmit={onFormSubmited}
    >
      <input
        type="text"
        required
        placeholder="First Name"
        value={form.name}
        onChange={(e) => onValueChanged({ name: e.target.value })}
      />
      {/* <input
        type="text"
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
      /> */}
      <div className="buttonsContainer">
        <Button type="submit" content="Create User" />
        <Button onClick={() => setOn(false)} content="Cancel" />
      </div>
      {loading && <h3>Posting...</h3>}
    </form>
  );
};

export default CreateForm;

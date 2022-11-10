import React, { useState } from "react";
import Button from "../Button/Button";
import Modal from "../Modal";
import Portal from "../Portal";
import ShowUserDetails from "../ShowUserDetails";
import classes from "./UsersTable.module.css";

const UsersTable = ({ users }) => {
  const [displayedUser, setDisplayedUser] = useState(null);
  const [on, setOn] = useState(false);

  const fields = ["Name", "Last Name", "Email", "Date of Birth"];

  const showUser = (user) => {
    setOn(true);
    setDisplayedUser(user);
  };

  return (
    <main className={classes.main}>
      <table className={classes.usersTable}>
        <thead>
          <tr>
            {fields.map((field, index) => (
              <th key={field + index}>{field}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            const { _uuid, name, lastname, email, birth } = user;
            return (
              <tr key={_uuid}>
                <td>{name}</td>
                <td>{lastname}</td>
                <td>{email}</td>
                <td>{birth}</td>
                <td>
                  <div className="buttonsContainer">
                    <Button
                      content="Show Details"
                      onClick={() => showUser(user)}
                    />
                    <Button content="Delete" />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {on && (
        <Portal>
          <Modal setOn={setOn}>
            <ShowUserDetails user={displayedUser} />
          </Modal>
        </Portal>
      )}
    </main>
  );
};
export default UsersTable;

import React, { useState } from "react";
import classes from "./UsersTable.module.css";
import { useFetch } from "../../hooks/useFetch";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import Portal from "../Portal";
import ShowUserDetails from "../ShowUserDetails";

const UsersTable = ({ users, setUsers }) => {
  const [displayedUser, setDisplayedUser] = useState(null);
  const { execute: executeDeleteUser } = useFetch(setUsers);

  const onClose = () => setDisplayedUser(null);

  const fields = ["Name", "Last Name", "Email", "Date of Birth"];

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
                      value="Show Details"
                      onClick={() => setDisplayedUser(user)}
                    />
                    <Button
                      value="Delete"
                      onClick={() => executeDeleteUser("delete", _uuid)}
                    />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {displayedUser && (
        <Portal>
          <Modal onClose={onClose}>
            <ShowUserDetails user={displayedUser} />
          </Modal>
        </Portal>
      )}
    </main>
  );
};
export default UsersTable;

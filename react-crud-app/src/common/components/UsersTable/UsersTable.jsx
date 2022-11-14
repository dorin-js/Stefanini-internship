import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classes from './UsersTable.module.css';
import UserRow from './UserRow';
import { Modal, Portal, ShowUserDetails } from '..';
import userApi from '../../services/usersApi';

const UsersTable = ({ users, onDeleteUser }) => {
  const [displayedUser, setDisplayedUser] = useState(null);
  const [loading, setLoading] = useState();

  const deleteUser = async (id) => {
    setLoading(true)
    userApi.deleteUserById(id)
      .then(() => {
        onDeleteUser((prevState) => [...prevState].filter((user) => user._uuid !== id));
      })
      .then(() => setLoading(false))
      .catch((err) => { console.log(err); });
  };

  const onClose = () => setDisplayedUser(null);

  return (
    <main className={classes.main}>
      <table className={classes.usersTable}>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Date of Birth</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserRow
              key={user._uuid}
              user={user}
              deleteUser={deleteUser}
              setDisplayedUser={setDisplayedUser}
              setLoading={setLoading}
            />
          ))}
        </tbody>
      </table>
      {displayedUser && (
        <Portal>
          <Modal onClose={onClose}>
            <ShowUserDetails user={displayedUser} />
          </Modal>
        </Portal>
      )}
      error
    </main>
  );
};

UsersTable.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    lastname: PropTypes.string,
    email: PropTypes.string,
    birth: PropTypes.string,
  })),
  onDeleteUser: PropTypes.func,
};
UsersTable.defaultProps = {
  users: [],
  onDeleteUser: () => undefined,
};

export default UsersTable;

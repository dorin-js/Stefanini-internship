/* eslint-disable no-underscore-dangle */
import React, { useCallback, useEffect, useState } from 'react';
import userApi from '../services/usersApi';
import Error from '../components/Error';
import CreateUser from './CreateUser';
import { UsersTable, UserRow } from '../components/UsersTable';

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getUsers = useCallback(async () => {
    setLoading(true);
    try {
      const { items } = await userApi.getAllUsers();
      setUsers(items); // refactor
    } catch (e) {
      setError(e.message);
    }
    setLoading(false);
  }, [userApi]);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const onDeleteUser = (id) => {
    setUsers((prevUsers) => [...prevUsers].filter((user) => user._uuid !== id));
  };

  if (loading) {
    return <h3>Loading...</h3>;
  }

  if (error) {
    return <Error message={error} />;
  }

  return (
    <>
      <CreateUser onCreateUser={setUsers} />
      <UsersTable>
        {users.map((user) => (
          <UserRow
            // eslint-disable-next-line no-underscore-dangle
            key={user._uuid}
            user={user}
            onDelete={onDeleteUser}
          />
        ))}
      </UsersTable>
      {/* {displayedUser && (
        <Portal>
          <Modal onClose={onClose}>
            <UserForm user={displayedUser} />
          </Modal>
        </Portal>
      )} */}
    </>
  );
};

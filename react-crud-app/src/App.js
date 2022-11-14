import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
import { UsersTable, Error } from './common/components';
import CreateUser from './common/screens/CreateUser';
import userApi from './common/services/usersApi';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getUsers = useCallback(() => {
    setLoading(true);
    userApi.getAllUsers()
      .then((res) => {
        setUsers(res.items);
        // setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        // setLoading(false);
      })
      .finally(() => setLoading(false));
  }, []); // >> deps?

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  if (loading) {
    return <h3>Loading...</h3>;
  }

  if (error) {
    return <Error message={error} />;
  }

  return (
    <div className="App">
      <h2 className="title">Users data base</h2>
      <CreateUser onCreateUser={setUsers} />
      <UsersTable users={users} onDeleteUser={setUsers} />
    </div>
  );
};

export default App;

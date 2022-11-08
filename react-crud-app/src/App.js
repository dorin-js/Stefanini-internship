import React, { useEffect, useState } from "react";

import "./App.css";
import Error from "./components/Error";
import UsersTable from "./components/UsersTable";
import UserTableRow from "./components/UserTableRow";
import { UsersApi } from "./services/usersApi.js";

const usersApiInstance = new UsersApi();

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getAllUsers = async () => {
    setLoading(true);

    try {
      const data = await usersApiInstance.getAllUsers();
      setUsers(data.items);
    } catch (error) {
      setError(error.message);
    }

    setLoading(false);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  if (loading) {
    return <h3>Loading...</h3>;
  }

  if (error) {
    return <Error message={error} />;
  }

  return (
    <div className="App">
      <h2 className="title">Users data base</h2>
      <UsersTable>
        {users.map((user) => (
          <UserTableRow key={user._uuid} user={user} />
        ))}
      </UsersTable>
    </div>
  );
};

export default App;

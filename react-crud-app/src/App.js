import React, { useEffect, useState } from "react";

import "./App.css";
import Error from "./components/Error";
import Loader from "./components/Loader";
import UsersTable from "./components/UsersTable";
import UserTableRow from "./components/UserTableRow";
import { usersApi } from "./services/usersApi.js";

const usersApiInstance = new usersApi();

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
    return <Loader loadingState={loading} />;
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

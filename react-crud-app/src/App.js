import React, { useEffect, useState } from "react";
import "./App.css";
import Error from "./common/components/Error";
import UsersTable from "./common/components/UsersTable/UsersTable";
import CreateUser from "./common/screens/CreateUser";
import { UsersApi } from "./common/services/usersApi";

const userApi = new UsersApi();

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const executeGetUsers = async () => {
    try {
      setLoading(true);
      userApi.getAllUsers().then((res) => {
        setUsers(res.items);
        setLoading(false);
      });
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    executeGetUsers();
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
      <CreateUser setUsers={setUsers} />
      <UsersTable users={users} setUsers={setUsers} />
    </div>
  );
};

export default App;

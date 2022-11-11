import React, { useEffect, useState } from "react";
import "./App.css";
import { useFetch } from "./common/hooks/useFetch";
import Error from "./common/components/Error";
import UsersTable from "./common/components/UsersTable/UsersTable";
import CreateUser from "./common/screens/CreateUser";

const App = () => {
  const [users, setUsers] = useState([]);
  const { loading, error, execute: executeGetUsers } = useFetch(setUsers);

  useEffect(() => {
    executeGetUsers("get");
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

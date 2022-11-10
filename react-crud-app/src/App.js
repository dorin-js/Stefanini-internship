import React, { useEffect } from "react";
import "./App.css";
import Error from "./common/components/Error";
import UsersTable from "./common/components/UsersTable";
import CreateUser from "./common/screens/CreateUser";
import { useFetch } from "./common/hooks/useFetch";

const App = () => {
  const { loading, data: users, error, execute } = useFetch();
  // let filtered = [];
  // if (users) {
  //   filtered = [...users];
  // }

  useEffect(() => {
    execute("get");
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
      <CreateUser />
      <UsersTable users={users} />
    </div>
  );
};

export default App;

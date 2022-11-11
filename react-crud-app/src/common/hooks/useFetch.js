import { useState } from "react";
import { UsersApi } from "../services/usersApi";

const userApi = new UsersApi();

export const useFetch = (setUsers) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const execute = async (method, body = {}) => {
    try {
      setLoading(true);
      if (method === "get") {
        userApi.getAllUsers().then((res) => {
          setUsers(res.items);
          setLoading(false);
        });
      }
      if (method === "post") {
        userApi.postUser(body).then(({ items }) => {
          setUsers((prevState) => [...items, ...prevState]);
        });
      }
      if (method === "delete") {
        userApi.deleteUserById(body).then((deletedUser) => {
          setUsers((prevState) =>
            [...prevState].filter((user) => user._uuid !== deletedUser._uuid)
          );
          setLoading(false);
        });
      }
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return { loading, error, execute };
};

import { useState } from "react";
import { UsersApi } from "../services/usersApi";

const userApi = new UsersApi();

export const useFetch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const execute = async (method, body = {}) => {
    try {
      setLoading(true);
      if (method === "get") {
        userApi.getAllUsers().then((res) => {
          setData(res.items);
          setLoading(false);
        });
      }
      if (method === "post") {
        setLoading(true);
        userApi.postUser(body).then(setLoading(false));
        setLoading(false);
      }
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return { loading, data, error, execute };
};

import React, { useState } from "react";

const UserTableRow = ({ user: { name, surname, email, birth } }) => {
  const showDetails = (user) => {};

  return (
    <tr>
      <td>{name}</td>
      <td>{surname}</td>
      <td>{email}</td>
      <td>{birth}</td>
      <td>
        <button onClick={() => {}}>Show Details</button>
      </td>
    </tr>
  );
};

export default UserTableRow;

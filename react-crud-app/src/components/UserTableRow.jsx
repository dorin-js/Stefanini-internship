import React, { useState } from "react";
import RenderInWindow from "./RenderInWindow";

const UserTableRow = ({ user }) => {
  const [isOn, setOn] = useState(false);

  const showDetails = (user) => {
    console.log(user._uuid);
    setOn(!isOn);
  };

  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.surname}</td>
      <td>{user.email}</td>
      <td>{user.birth}</td>
      <td>
        <button onClick={() => showDetails(user)}>Show Details</button>
      </td>
      {isOn && (
        <RenderInWindow isOn={isOn} setOn={setOn}>
          <div>Awesome content!</div>
        </RenderInWindow>
      )}
    </tr>
  );
};

export default UserTableRow;

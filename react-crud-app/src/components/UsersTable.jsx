import React from "react";

const UsersTable = ({ children }) => {
  return (
    <main id="main" className="main">
      <table id="users-data-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Date of Birth</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody id="users-data-table-body">{children}</tbody>
      </table>
    </main>
  );
};

export default UsersTable;

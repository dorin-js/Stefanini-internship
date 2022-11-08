import React, { useState } from "react";

const UsersTable = ({ children }) => {
  const fields = ["Name", "Surname", "Email", "Date of Birth"];

  return (
    <main id="main" className="main">
      <table id="users-data-table">
        <thead>
          <tr>
            {fields.map((field, index) => (
              <th key={field + index}>{field}</th>
            ))}
          </tr>
        </thead>
        <tbody id="users-data-table-body">{children}</tbody>
      </table>
    </main>
  );
};

export default UsersTable;

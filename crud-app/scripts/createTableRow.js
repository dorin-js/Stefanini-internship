export const createTableRow = (user) => {
  const tr = document.createElement("tr");
  tr.innerHTML = `
          <td>${user.name}</td>
          <td>${user.lastname}</td>
          <td>${user.email}</td>
          <td>${user.birth}</td>
          <td>
            <button id="${user._uuid}">
              Show Details
            </button>
          </td>
        `;
  return tr;
};

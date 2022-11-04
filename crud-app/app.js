import { HttpClient } from "./service/httpClient.js";
import { selectShowUserDetailsButtons } from "./scripts/showUserDetails.js";
import { displayLoader, removeLoader } from "./scripts/displayLoader.js";
import { createTableRow } from "./scripts/createTableRow.js";

document.addEventListener("DOMContentLoaded", updateUsersTable);

export const httpClient = new HttpClient();

const usersTable = document.querySelector("#users-data-table");
const tableBody = document.querySelector("#data-users");
const main = document.querySelector("#main");

export async function updateUsersTable() {
  displayLoader(main);

  try {
    const { data: users } = await httpClient.getAllUsers();

    if (users) {
      removeLoader();

      let fragment = new DocumentFragment();

      users.items.forEach((user) => {
        fragment.append(createTableRow(user));
      });

      tableBody.append(fragment);
      usersTable.classList.remove("display-none");
      selectShowUserDetailsButtons(users.items);
    }
  } catch (error) {
    alert(error.message);
  }
}

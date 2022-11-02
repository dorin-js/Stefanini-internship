import { HttpClient } from "./httpClient.js";

const tableBody = document.querySelector("#data-users");

const httpClient = new HttpClient({ baseUrl: "https://crudapi.co.uk/api/v1" });

const updateUsersTable = async () => {
  const span = document.querySelector("#loading");
  const usersTable = document.querySelector("#users-data-table");

  span.textContent = ">>> Loading...";

  const { data: users, isLoading } = await httpClient.get("/users");

  if (!isLoading && users) {
    span.textContent = "";
    let fragment = new DocumentFragment();

    users.items.forEach((user) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
          <td>${user.name}</td>
          <td>${user.surname}</td>
          <td>${user.email}</td>
          <td>${user.birth}</td>
          <td><a href="details.html" target="_blank">Show Details</a></td>
        `;

      fragment.append(tr);
    });

    tableBody.append(fragment ?? "UPS");
    usersTable.classList.remove("display-none");
  }
};
document.addEventListener("DOMContentLoaded", updateUsersTable);

// const form = document.forms["form"];
// console.log(form);
// form.onsubmit = function (e) {
//   e.preventDefault();
//   var fname = document.form.fname.value;
//   var lname = document.form.lname.value;
//   var form = document.form.email.value;
//   console.log(fname, lname, form);
// };
let posting = false;

const createUserForm = document.getElementById("createUser");
createUserForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  let formData = new FormData(createUserForm);
  const formProps = [Object.fromEntries(formData)];
  // console.log(formProps);

  posting = true;
  showToaster("Posting...!");

  const response = await httpClient.post("/users", formProps);

  if (response && !response.isLoading) {
    posting = false;
    updateToaster("Posted successfully!", 2000);
  }
  updateLocalTable(formProps[0]);
});

const showToaster = (message) => {
  const toaster = document.createElement("div");
  toaster.classList.add("toaster");
  toaster.textContent = message;
  document.body.appendChild(toaster);
};

const updateToaster = (message, ms) => {
  const toaster = document.querySelector(".toaster");
  if (toaster && toaster.textContent == "Posting...!")
    toaster.textContent = message;
  setTimeout(() => {
    toaster.remove();
  }, ms);
};
const updateLocalTable = (formData) => {
  const tr = document.createElement("tr");
  tr.innerHTML = `
          <td>${formData.name}</td>
          <td>${formData.surname}</td>
          <td>${formData.email}</td>
          <td>${formData.birth}</td>
          <td><a href="details.html" target="_blank">Show Details</a></td>
        `;
  tableBody.prepend(tr);
};

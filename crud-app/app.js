import { HttpClient } from "./httpClient.js";

const tableBody = document.querySelector("#data-users");

const httpClient = new HttpClient({ baseUrl: "https://crudapi.co.uk/api/v1" });

async function fetchUserDetails(id) {
  const { data: user, isLoading } = await httpClient.get(`/users/${id}`);
  if (user) console.log(user);
}

const updateUsersTable = async () => {
  const loader = document.querySelector("#loading");
  const usersTable = document.querySelector("#users-data-table");

  loader.classList.add("show-loading");

  const { data: users, isLoading } = await httpClient.get("/users");

  if (!isLoading && users) {
    loader.classList.remove("show-loading");

    let fragment = new DocumentFragment();

    users.items.forEach((user) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
          <td>${user.name}</td>
          <td>${user.surname}</td>
          <td>${user.email}</td>
          <td>${user.birth}</td>
          <td>
            <button              
              onclick="fetchUserDetails(${user._uuid})"
            >
              Show Details
            </button>
          </td>
        `;

      fragment.append(tr);
    });

    tableBody.append(fragment);
    usersTable.classList.remove("display-none");
  }
};
document.addEventListener("DOMContentLoaded", updateUsersTable);

const createUserForm = document.getElementById("createUser");
createUserForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  let formData = new FormData(createUserForm);
  const formProps = [Object.fromEntries(formData)];
  // let name = document.createUserForm.name.value;
  // let surname = document.createUserForm.surnamename.value;
  // let email = document.createUserForm.email.value;
  // let birth = document.createUserForm.birth.value;

  showToaster("Posting...!");

  const response = await httpClient.post("/users", formProps);

  if (response && !response.isLoading) {
    updateToaster("Posted successfully!", 2000);
  }

  updateLocalTable(formProps[0]);
  createUserForm.reset();
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
          <td><button>Show Details</button></td>
        `;
  tableBody.prepend(tr);
};

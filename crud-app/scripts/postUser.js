import { httpClient, updateUsersTable } from "../app.js";
import { showToaster, updateToaster } from "./toaster.js";

const tableBody = document.querySelector("#data-users");

const createUserForm = document.getElementById("createUser");
createUserForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  let name = document.forms.form.name.value.trim();
  let surname = document.forms.form.surname.value.trim();
  let email = document.forms.form.email.value.trim();
  let birth = document.forms.form.birth.value.trim();
  if (name == "" || surname == "" || email == "" || birth == "") return;

  const formProps = [
    {
      name,
      surname,
      email,
      birth,
    },
  ];

  showToaster("Posting...!");

  const response = await httpClient.postUser("/users", formProps);

  if (response && !response.isLoading) {
    updateToaster("Posted successfully!", 2000);
  }
  tableBody.innerHTML = "";
  updateUsersTable();
  createUserForm.reset();
});

import { httpClient, updateUsersTable } from "../app.js";
import { showToaster, updateToaster } from "./toaster.js";

const tableBody = document.querySelector("#data-users");
const closeIcon = document.querySelector(".close-icon");
const createUserForm = document.getElementById("createUser");
const openCreateModalButton = document.getElementById("open-create-modal");

openCreateModalButton.addEventListener("click", () => {
  createUserForm.classList.remove("display-none");
});
closeIcon.addEventListener("click", () => hideModal());

createUserForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.forms.form.name.value.trim();
  const surname = document.forms.form.surname.value.trim();
  const email = document.forms.form.email.value.trim();
  const birth = document.forms.form.birth.value.trim();
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

  try {
    const response = await httpClient.postUser("/users", formProps);

    if (response) {
      updateToaster("ok", "Posted successfully!", 2000);
      tableBody.innerHTML = "";
      updateUsersTable();
      createUserForm.reset();
      hideModal();
    }
  } catch (error) {
    updateToaster("error", `Error! ${error.message || error.name}`, 5000);
  }
});

function hideModal() {
  createUserForm.classList.add("display-none");
}

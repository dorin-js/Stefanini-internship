const URL = "https://crudapi.co.uk/api/v1/users";
const TOKEN = "Bearer olu5NPakWYl5j4sI_KYgZ7AcybIN-B5ke6fyafBQzgGsB7vggw";

let loading = false;

export const fetchUsers = async (url, token) => {
  try {
    loading = true;

    const span = document.querySelector("#loading");
    span.textContent = "Loading...";

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    const data = await response.json();
    loading = false;

    return data.items;
  } catch (error) {
    loading = false;
    console.log(error);
  }
};

const updateUi = async () => {
  const tableBody = document.querySelector("#data-users");
  const span = document.querySelector("#loading");
  const usersTable = document.querySelector("#users-data-table");

  const users = await fetchUsers(URL, TOKEN);

  if (users && !loading) {
    span.remove();
    let fragment = new DocumentFragment();
    users.forEach((user) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
          <td>${user.name}</td>
          <td>${user.surname}</td>
          <td>${user.dateOfbirth}</td>
        `;
      fragment.append(tr);
    });
    tableBody.append(fragment ?? "UPS");
    usersTable.classList.remove("display-none");
  }
};
updateUi();

const createUserButton = document.querySelector("#create-user");

createUserButton.addEventListener("click", () => createUser(data));

async function createUser(formData) {
  openForm();
}

function openForm() {}

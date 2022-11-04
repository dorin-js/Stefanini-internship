import { httpClient } from "../app.js";
import { displayLoader, removeLoader } from "./displayLoader.js";

const detailsSection = document.querySelector("#details-section");

export async function fetchUserDetails(id) {
  displayLoader(detailsSection);
  const { data: user } = await httpClient.getUserById(id);
  if (user) {
    removeLoader();
    displayDetailsForAUser(user);
  }
}

export function selectShowUserDetailsButtons(users) {
  users.forEach((user) => {
    const showDetailsButton = document.getElementById(user._uuid);
    showDetailsButton.addEventListener("click", () =>
      fetchUserDetails(user._uuid)
    );
  });
}

export function displayDetailsForAUser(user) {
  let fragment = new DocumentFragment();

  const fullName = document.createElement("h4");
  fullName.textContent = `${user.name} ${user.surname}`;
  fragment.prepend(fullName);

  const information = Object.entries(user);
  information.forEach((info) => {
    const div = document.createElement("div");
    div.textContent = `${info[0]}: ${info[1]}`;
    fragment.appendChild(div);
  });

  const wrapper = document.createElement("div");
  const dismiss = document.createElement("button");
  wrapper.style = "margin: 3rem 0";
  dismiss.textContent = "Hide information";
  dismiss.style = "margin: 0.5rem 0";
  fragment.append(dismiss);
  wrapper.prepend(fragment);
  detailsSection.prepend(wrapper);

  dismiss.addEventListener("click", () => {
    wrapper.remove();
  });
}

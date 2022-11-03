export const showToaster = (message) => {
  const toaster = document.createElement("div");
  toaster.classList.add("toaster");
  toaster.textContent = message;
  document.body.appendChild(toaster);
};

export const updateToaster = (message, ms) => {
  const toaster = document.querySelector(".toaster");
  if (toaster && toaster.textContent == "Posting...!")
    toaster.textContent = message;
  setTimeout(() => {
    toaster.remove();
  }, ms);
};

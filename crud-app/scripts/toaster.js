export const showToaster = (message) => {
  const toaster = document.createElement("div");
  toaster.classList.add("toaster");
  toaster.textContent = message;
  document.body.appendChild(toaster);
};

export const updateToaster = (type = "ok", message, ms) => {
  const toaster = document.querySelector(".toaster");
  if (toaster && toaster.textContent != "") toaster.textContent = message;
  if (type == "error") {
    console.log("error");
    toaster.style =
      "background: rgba(255, 29, 29, 0.785); border: 1px solid rgba(255, 29, 29, 0.585)";
  }
  setTimeout(() => {
    toaster.remove();
  }, ms);
};

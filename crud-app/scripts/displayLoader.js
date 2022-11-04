export function displayLoader(displayLocationNode) {
  const loader = document.createElement("div");
  loader.setAttribute("id", "loading");
  loader.classList.add("show-loading");
  displayLocationNode.prepend(loader);
}
export const removeLoader = () => {
  const loader = document.querySelector("#loading");
  loader.remove();
};

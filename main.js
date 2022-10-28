import { functionsData } from "./data.js";

const app = document.querySelector(".app");

functionsData.forEach((element) => {

  const title = document.createElement("h3");
  title.textContent = element.Folder.toUpperCase();

  app.appendChild(title);

  const path = `./${element.Folder}/${element.FileName}.js`;

  element.FunctionName.forEach((name) => {
    const button = document.createElement("button");
    button.textContent = name;
    button.addEventListener("click", async function load() {
      let fnName = await import(path);
      console.log(fnName)
      fnName[name]();
    });
    app.appendChild(button);
  });
});

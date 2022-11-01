import { functionsData } from "./data.js";

const app = document.querySelector(".app");

functionsData.forEach((element) => {
  const title = document.createElement("h3");
  title.textContent = element.folder.toUpperCase();

  app.appendChild(title);

  const { fileNames, folder } = element;

  for (let fileName in fileNames) {
    const path = `./${folder}/${fileName}.js`;

    const list = document.createElement("div");
    list.classList.add("main-grid");

    const category = document.createElement("h5");
    category.textContent = fileName;
    app.append(category);

    fileNames[fileName].forEach((name) => {
      const button = document.createElement("button");

      button.textContent = name;
      button.addEventListener("click", loadDynamicModule);

      list.append(button);

      async function loadDynamicModule() {
        let fnName = await import(path);
        fnName[name]();
      }
    });

    app.appendChild(list);
  }
});

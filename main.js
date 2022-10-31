import { functionsData } from "./data.js";

const app = document.querySelector(".app");

functionsData.forEach((element) => {
  const title = document.createElement("h3");
  title.textContent = element.folder.toUpperCase();

  app.appendChild(title);

  const { fileNames, folder } = element;

  for (let fileName in fileNames) {
    const path = `./${folder}/${fileName}.js`;
    const list = document.createElement("ul");
    const category = document.createElement("h5");
    category.textContent = fileName;
    app.append(category);
    fileNames[fileName].forEach((name) => {
      const button = document.createElement("button");
      const li = document.createElement("li");
      // button.textContent = name;
      button.addEventListener("click", async function load() {
        let fnName = await import(path);
        fnName[name]();
      });
      button.textContent = name;
      li.appendChild(button);
      list.append(li);
    });
    app.appendChild(list);
  }
});

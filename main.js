const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");
const historia = [];
const historial = document.querySelector("#historial");

// funcion agregar tarea
addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const text = input.value;

  if (text !== "") {
    const li = document.createElement("li");
    const p = document.createElement("p");

    p.textContent = text;

    li.appendChild(p);
    ul.appendChild(li);
    li.appendChild(addDeleteBtn());
    historia.push(text);
    agregaHistorial();

    input.value = "";

    empty.style.display = "none";
  }
});

//funcion borrar tarea
function addDeleteBtn() {
  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "X";
  deleteBtn.className = "btn-delete";

  deleteBtn.addEventListener("click", (d) => {
    const item = d.target.parentElement;

    ul.removeChild(item);

    const items = document.querySelectorAll("li");

    if (items.length === 0) {
      empty.style.display = "block";
    }
  });
  return deleteBtn;
}

//intento de historial
function agregaHistorial() {
  historia.forEach((nuevo) => {
    const tarea = document.createElement("p");
    tarea.textContent = nuevo;
    historial.appendChild(tarea);
  });
}

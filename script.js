const form = document.querySelector("form");
const input = document.querySelector("#txtTaskName");
const btnDltAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");

const cardTwo = document.querySelector(".card_two");
cardTwo.style.display = "none";

eventListeners();
function eventListeners() {
  form.addEventListener("submit", addNewItem);
  taskList.addEventListener("click", deleteItem);
  btnDltAll.addEventListener("click", btnDeleteAll);
}

function addNewItem(e) {
  if (input.value === "") {
    alert("Listeye boş ekleme yapamazsınız!");
  } else {
    cardTwo.style.display = "flex";
    const li = document.createElement("li");
    li.className = "list-group-item list-group-item-secondary";
    li.appendChild(document.createTextNode(input.value));

    const a = document.createElement("a");
    a.className = "delete-item float-end";
    a.setAttribute("href", "#");
    a.innerHTML = '<i class="fas fa-times"></i>';

    li.appendChild(a);
    taskList.appendChild(li);
    input.value = "";
  }
  e.preventDefault();
}
function deleteItem(e) {
  if (e.target.className === "fas fa-times") {
    e.target.parentElement.parentElement.remove();
  }
  e.preventDefault();
}

function btnDeleteAll(e) {
  if (confirm("Are you sure?")) {
    taskList.innerHTML = "";
  }

  e.preventDefault();
}

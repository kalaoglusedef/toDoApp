const form = document.querySelector("form");
const input = document.querySelector("#txtTaskName");
const btnDltAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");
eventListeners();
function eventListeners() {
  form.addEventListener("submit", addNewItem);
  taskList.addEventListener("click", deleteItem);
  btnDltAll.addEventListener("click", btnDeleteAll);
}
function addNewItem(e) {
  if (input.value === "") {
    alert("Add New Item");
  }
  const li = document.createElement("li");
  li.className = "list-group-item list-group-item-secondary";
  li.appendChild(document.createTextNode(input.value));

  const a = document.createElement("a");
  a.className = "delete-item float-end";
  a.setAttribute("href", "#");
  a.innerHTML = '<i class="fa-solid fa-x"></i>';

  li.appendChild(a);
  taskList.appendChild(li);
  input.value = "";
  e.preventDefault();
}
function deleteItem(e) {
  if (e.target.className === "fa-solid fa-x") {
    e.target.parentElement.parentElement.remove();
  }
  e.preventDefault();
}

function btnDeleteAll(e) {
  //   if (
  //     e.target.className === "btn btn-outline-danger btn-sm delete-all float-end"
  //   ) {
  //     taskList.remove();
  //   }

  //   taskList.innerHTML = "";
  if (confirm("Are you sure?")) {
    taskList.childNodes.forEach(function (item) {
      if (item.nodeType === 1) {
        item.remove();
      }
    });
  }

  e.preventDefault();
}

// Selectors

// selectarea formularului
const form = document.querySelector("#task-form");

// selectez lista de task-uri
const taskList = document.querySelector(".collection");

// selectez butonul clear button
const clearButton = document.querySelector(".clear-tasks");

// selectez inputul pentru add task
const addTask = document.querySelector("#task");

// selectez inputul pentru filtrare-filter task
const filterTask = document.querySelector("#filter");

// implementarea evenimentului de submit pe intreg formularul
// asa cum este construit, formularul, avem: un input de tip text, un buton de sumbit si un lable

// submit event
form.addEventListener("submit", submitTask);
function submitTask(event) {
  // anulez comportamentul default al formularului
  event.preventDefault();
  // daca nicio valoare nu este adaugata in input-ul add task care a fost selectat anterior cu DOM

  // in momentul cand vreau sa aduag un task, eu vreau sa creez o lista de task uri
  // crearea de list-item-uri
  const li = document.createElement("li");
  // add class
  li.className = "collection-item";
  // create text node-continutul textului pentru fiecare li
  li.appendChild(document.createTextNode(addTask.value));

  // append li to ul-am asociat intregii liste selectate fiecare list-item creat, la submiterea formularului
  taskList.appendChild(li);

  // Stocare in local Storage-stochez valoarea fiecarui task adaugat in LS
  storeTaskInLocalStorage(addTask.value);

  // clear input-resetarea inputului la valoarea initiala cand nu este introdus nimic nou in el- adica este un string gol
  addTask.value = "";
}


// stergerea listei de task-uri->click event
clearButton.addEventListener("click", deletTask);
function deletTask() {
  // prin aceasta functie practic tot cotinutul liste este gol
  taskList.innerHTML = "";
}

// filter tasks
filterTask.addEventListener("keyup", selectedTask);
function selectedTask(event) {
  // salvez valoarea inputului intr-o variabila
  const inputValue = event.target.value;
  // am nevoie sa iau toate li-urie
  document.querySelectorAll(".collection-item").forEach(function (task) {
    // salvez continutul textului pentru primul li
    const item = task.firstChild.textContent;
    if (item.toLocaleLowerCase().indexOf(inputValue) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}


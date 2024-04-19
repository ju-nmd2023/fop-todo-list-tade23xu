function clickHandler() {
  const inputElement = document.getElementById("ToDoInput");
  const value = inputElement.value.trim();

  if (value !== "") {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.push({ task: value, done: false });

    localStorage.setItem("tasks", JSON.stringify(tasks));

    inputElement.value = "";

    displayTasks();
  } else {
    alert("Add a task to continue <3");
  }
  //message feature is provided by chatGPT https://chat.openai.com/share/51b28ac7-be59-4e01-b8a3-0c6828ffbbdb
}

function displayTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  const planner = document.getElementById("planner");

  planner.innerHTML = "";

  tasks.forEach((task, index) => {
    const listItem = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.done;
    checkbox.addEventListener("change", () => {
      tasks[index].done = checkbox.checked;
      localStorage.setItem("tasks", JSON.stringify(tasks));
      displayTasks();
    });

    const label = document.createElement("label");
    label.textContent = task.task;

    if (task.done) {
      label.style.textDecoration = "line-through";
    }

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-button");
    removeButton.addEventListener("click", () => {
      tasks.splice(index, 1);
      //Line 50 is learnt from chatGPT which funtions for removing task
      localStorage.setItem("tasks", JSON.stringify(tasks));
      displayTasks();
    });

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(removeButton);
    planner.appendChild(listItem);
  });
}

function loadHandler() {
  const button = document.getElementById("addbutton");
  button.addEventListener("click", clickHandler);

  displayTasks();
}

window.addEventListener("load", loadHandler);

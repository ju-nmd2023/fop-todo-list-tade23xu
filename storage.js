function clickHandler() {
  const inputElement = document.getElementById("ToDoInput");
  const value = inputElement.value;

  inputElement.value = "";
}

function loadHandler() {
  const button = document.getElementById("addbutton");
  button.addEventListener("click", clickHandler);
}
window.addEventListener("load", loadHandler);

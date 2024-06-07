document.addEventListener("DOMContentLoaded", function() {
    const addBtn = document.getElementById("add-btn");
    const addItemInput = document.getElementById("new-item");
    const sortBtn = document.getElementById("sort-btn");
    const toDoListUL = document.getElementById("to-do-list");
    const errorMessageDiv = document.getElementById("error-message");
  
    let toDoList = [];
  
    addBtn.addEventListener("click", function() {
      const newItem = addItemInput.value.trim();
      if (newItem !== "" && newItem.length > 3 && newItem.charAt(0) === newItem.charAt(0).toUpperCase()) {
        toDoList.push({ text: newItem, checked: false });
        addItemInput.value = "";
        renderToDoList();
        errorMessageDiv.textContent = "";
      } else {
        errorMessageDiv.textContent = "Invalid input. Please check the constraints.";
      }
    });
  
    sortBtn.addEventListener("click", function() {
      toDoList.sort(function(a, b) {
        if (a.text < b.text) return -1;
        if (a.text > b.text) return 1;
        return 0;
      });
      renderToDoList();
    });
  
    function renderToDoList() {
      toDoListUL.innerHTML = "";
      toDoList.forEach(function(item) {
        const listItem = document.createElement("li");
        listItem.textContent = item.text;
        toDoListUL.appendChild(listItem);
  
        const checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        listItem.appendChild(checkBox);
  
        checkBox.checked = item.checked;
        if (item.checked) {
          listItem.classList.add("strike-through");
        } else {
          listItem.classList.remove("strike-through");
        }
  
        checkBox.addEventListener("click", function() {
          item.checked = checkBox.checked;
          if (checkBox.checked) {
            listItem.classList.add("strike-through");
          } else {
            listItem.classList.remove("strike-through");
          }
        });
      });
    }
  });
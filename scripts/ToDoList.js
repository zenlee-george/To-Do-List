let toDoList = [];

document.addEventListener("DOMContentLoaded", function() {
    const addBtn = document.getElementById("add-btn");
    const addItemInput = document.getElementById("new-item");
    const sortBtn = document.getElementById("sort-btn");

    addBtn.addEventListener("click", function() {
        const newItem = addItemInput.value.trim();
        if (newItem !== "" && newItem.length > 3 && newItem.charAt(0) === newItem.charAt(0).toUpperCase()) {
            toDoList.push(newItem);
            addItemInput.value = "";
            renderToDoList();
            errorMessageDiv.textContent = "";
        } else {
            errorMessageDiv.textContent = "Invalid input. Please check the constraints.";
        }
    });

    addBtn.addEventListener("click", function() {
        const newItem = addItemInput.value.trim();
        if (newItem!== "" && newItem.length > 3 && newItem.charAt(0) === newItem.charAt(0).toUpperCase()) {
            toDoList.push(newItem);
            addItemInput.value = "";
            renderToDoList();
            errorMessageDiv.textContent = "";
        } else {
            errorMessageDiv.textContent = "Invalid input. Please check the constraints.";
        }
    });
    
    sortBtn.addEventListener("click", function() {
        toDoList.sort();
        renderToDoList();
    });

    function renderToDoList() {
        toDoListUL.innerHTML = "";
        toDoList.forEach(function(item) {
            const listItem = document.createElement("li");
            listItem.textContent = item;
            toDoListUL.appendChild(listItem);
        });
    }
});
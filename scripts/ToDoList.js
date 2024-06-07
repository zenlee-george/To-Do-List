let toDoList = [];

document.addEventListener("DOMContentLoaded", function() {
    const addBtn = document.getElementById("add-btn");

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
});
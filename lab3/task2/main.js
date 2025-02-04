function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li"); // This automatically adds a bullet point
    li.textContent = taskInput.value;

    // Click to toggle strikethrough
    li.addEventListener("click", function () {
        li.classList.toggle("completed"); // Toggle strikethrough effect
    });

    // Create trash icon for delete button
    let deleteBtn = document.createElement("img");
    deleteBtn.src = "trash.png"; // Use your trash icon image
    deleteBtn.classList.add("trash-icon");
    deleteBtn.onclick = function () {
        li.remove();
    };

    // Append delete button to list item
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = ""; // Clear input field
}

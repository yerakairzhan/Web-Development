function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");
    li.textContent = taskInput.value;

    li.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    let deleteBtn = document.createElement("img");
    deleteBtn.src = "trash.png";
    deleteBtn.classList.add("trash-icon");
    deleteBtn.onclick = function () {
        li.remove();
    };
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = "";
}

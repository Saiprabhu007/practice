const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

// Initialize tasks array
let tasks = [];

// Check if tasks exist in local storage
if (localStorage.getItem("tasks")) {
  tasks = JSON.parse(localStorage.getItem("tasks"));
  renderTasks();
}

// Add event listener to add task button
addTaskBtn.addEventListener("click", () => {
  if (taskInput.value !== "") {
    tasks.push(taskInput.value);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
    taskInput.value = "";
  }
});

// Function to render tasks to task list
function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.innerText = task;
    taskList.appendChild(li);
  });
}

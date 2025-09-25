// Load saved tasks on page load
window.onload = function() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(task => addTaskToList(task));
}

// Add a new task
function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();
  if (!task) return;

  addTaskToList(task);

  // Save to localStorage
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));

  input.value = "";
}

// Helper: add task element to the page
function addTaskToList(task) {
  const li = document.createElement("li");
  li.innerHTML = `
    <span>${task}</span>
    <button onclick="removeTask(this)">❌</button>
  `;
  li.onclick = () => li.classList.toggle("done");
  document.getElementById("taskList").appendChild(li);
}

// Remove task and update localStorage
function removeTask(button) {
  const li = button.parentElement;
  const taskText = li.querySelector('span').textContent;

  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks = tasks.filter(t => t !== taskText);
  localStorage.setItem('tasks', JSON.stringify(tasks));

  li.remove();
}

// Clear all tasks
function clearAllTasks() {
  document.getElementById("taskList").innerHTML = "";
  localStorage.removeItem('tasks');
}

// Load tasks from localStorage when the page loads
window.onload = function() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(task => addTaskToList(task));
}

// Function to add task
function addTask() {
  let input = document.getElementById("taskInput");
  let task = input.value.trim();
  if (task) {
    addTaskToList(task);

    // Save to localStorage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    input.value = "";
  }
}

// Helper to create task in the list
function addTaskToList(task) {
  let li = document.createElement("li");
  li.innerHTML = `
    <span>${task}</span>
    <button onclick="removeTask(this)">❌</button>
  `;
  li.onclick = () => li.classList.toggle("done");
  document.getElementById("taskList").appendChild(li);
}

// Remove task and update localStorage
function removeTask(button) {
  let li = button.parentElement;
  let taskText = li.querySelector('span').textContent;

  // Remove from localStorage
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks = tasks.filter(t => t !== taskText);
  localStorage.setItem('tasks', JSON.stringify(tasks));

  li.remove();
}

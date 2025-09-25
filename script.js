function addTask() {
  let input = document.getElementById("taskInput");
  let task = input.value.trim();

  if (task) {
    let li = document.createElement("li");

    li.innerHTML = `
      <span>${task}</span>
      <button onclick="this.parentElement.remove()">❌</button>
    `;

    li.onclick = () => li.classList.toggle("done");

    document.getElementById("taskList").appendChild(li);
    input.value = "";
  }
}

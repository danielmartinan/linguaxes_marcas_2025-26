const tasks = [
  { text: "Preparar aula virtual", done: false },
  { text: "Revisar materiales", done: false },
  { text: "Enviar recordatorio", done: true },
  { text: "Actualizar calendario", done: false },
  { text: "Subir ejemplos", done: true }
];

const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const errorMessage = document.getElementById("errorMessage");
const taskList = document.getElementById("taskList");
const totalCount = document.getElementById("totalCount");
const pendingCount = document.getElementById("pendingCount");
const doneCount = document.getElementById("doneCount");

function normalizeText(value) {
  return value.trim().toLowerCase();
}

function setMessage(message) {
  errorMessage.textContent = message;
}

function updateSummary() {
  const total = tasks.length;
  const done = tasks.filter((task) => task.done).length;
  const pending = total - done;

  totalCount.textContent = String(total);
  doneCount.textContent = String(done);
  pendingCount.textContent = String(pending);
}

function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = `task-item${task.done ? " done" : ""}`;

    const text = document.createElement("span");
    text.className = "task-text";
    text.textContent = task.text;

    const actions = document.createElement("div");
    actions.className = "task-actions";

    const toggleButton = document.createElement("button");
    toggleButton.type = "button";
    toggleButton.className = "secondary-button";
    toggleButton.textContent = task.done ? "Marcar pendiente" : "Marcar hecha";
    toggleButton.addEventListener("click", () => {
      tasks[index].done = !tasks[index].done;
      renderTasks();
      updateSummary();
    });

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "danger-button";
    deleteButton.textContent = "Eliminar";
    deleteButton.addEventListener("click", () => {
      tasks.splice(index, 1);
      renderTasks();
      updateSummary();
    });

    actions.append(toggleButton, deleteButton);
    li.append(text, actions);
    taskList.appendChild(li);
  });
}

function addTask() {
  const rawText = taskInput.value;
  const text = rawText.trim();

  if (!text) {
    setMessage("Introduce una tarea valida");
    return;
  }

  const exists = tasks.some((task) => normalizeText(task.text) === normalizeText(text));
  if (exists) {
    setMessage("La tarea ya existe");
    return;
  }

  tasks.push({ text, done: false });
  taskInput.value = "";
  setMessage("");
  renderTasks();
  updateSummary();
}

addTaskButton.addEventListener("click", addTask);
taskInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});

renderTasks();
updateSummary();

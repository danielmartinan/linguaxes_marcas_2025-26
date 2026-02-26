
const listaInicial = [
  { id: crypto.randomUUID(), nombre: "Ana García", presente: true },
  { id: crypto.randomUUID(), nombre: "Bruno López", presente: false },
  { id: crypto.randomUUID(), nombre: "Carla Pérez", presente: true },
  { id: crypto.randomUUID(), nombre: "Diego Núñez", presente: false },
  { id: crypto.randomUUID(), nombre: "Elena Varela", presente: true },
  { id: crypto.randomUUID(), nombre: "Fabián Suárez", presente: true }
];

document.addEventListener("DOMContentLoaded", () => {
  let alumnos = [...listaInicial];

  // Elementos del DOM
  const listaAlumnos = document.getElementById("listaAlumnos");
  const inputNombre = document.getElementById("nombreAlumno");
  const btnAgregar = document.getElementById("btnAgregar");
  const mensaje = document.getElementById("mensaje");
  const totalEl = document.getElementById("total");
  const presentesEl = document.getElementById("presentes");
  const ausentesEl = document.getElementById("ausentes");

  function normalizarNombre(nombre) {
    return nombre.trim().replace(/\s+/g, " ");
  }

  function mostrarMensaje(texto) {
    mensaje.textContent = texto;
  }

  function actualizarContadores() {
    const total = alumnos.length;
    const presentes = alumnos.filter((alumno) => alumno.presente).length;
    const ausentes = total - presentes;

    totalEl.textContent = String(total);
    presentesEl.textContent = String(presentes);
    ausentesEl.textContent = String(ausentes);
  }

  // Crea un elemento de lista para un alumno
  function crearItemAlumno(alumno) {
    const li = document.createElement("li");
    li.className = `alumno ${alumno.presente ? "presente" : "ausente"}`;

    const info = document.createElement("div");
    info.className = "info-alumno";

    const nombre = document.createElement("span");
    nombre.className = "nombre";
    nombre.textContent = alumno.nombre;

    const estado = document.createElement("span");
    estado.className = "estado";
    estado.textContent = alumno.presente ? "Presente" : "Ausente";

    info.append(nombre, estado);

    const acciones = document.createElement("div");
    acciones.className = "acciones";

    const btnToggle = document.createElement("button");
    btnToggle.type = "button";
    btnToggle.className = "btn-toggle";
    btnToggle.textContent = alumno.presente ? "Marcar ausente" : "Marcar presente";
    btnToggle.addEventListener("click", () => {
      alumno.presente = !alumno.presente;
      render();
    });

    const btnEliminar = document.createElement("button");
    btnEliminar.type = "button";
    btnEliminar.className = "btn-eliminar";
    btnEliminar.textContent = "Eliminar";
    btnEliminar.addEventListener("click", () => {
      alumnos = alumnos.filter((item) => item.id !== alumno.id);
      render();
    });

    acciones.append(btnToggle, btnEliminar);
    li.append(info, acciones);

    return li;
  }

  function render() {
    listaAlumnos.innerHTML = "";
    alumnos.forEach((alumno) => {
      listaAlumnos.appendChild(crearItemAlumno(alumno));
    });
    actualizarContadores();
  }

  function existeDuplicado(nombre) {
    const nombreNormalizado = nombre.toLowerCase();
    return alumnos.some((alumno) => alumno.nombre.toLowerCase() === nombreNormalizado);
  }

  function agregarAlumno() {
    const nombre = normalizarNombre(inputNombre.value);

    if (!nombre) {
      mostrarMensaje("Introduce un nombre válido.");
      return;
    }

    if (existeDuplicado(nombre)) {
      mostrarMensaje("Ese alumno ya existe en la lista.");
      return;
    }

    if (alumnos.length >= 10) {
      mostrarMensaje("Límite de alumnos alcanzado.");
      return;
    }

    alumnos.push({
      id: crypto.randomUUID(),
      nombre,
      presente: true
    });

    inputNombre.value = "";
    inputNombre.focus();
    mostrarMensaje("");
    render();
  }

  btnAgregar.addEventListener("click", agregarAlumno);
  inputNombre.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      agregarAlumno();
    }
  });

  render();
});

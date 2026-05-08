const rgbInput = document.getElementById("rgbInput");
const applyButton = document.getElementById("applyButton");
const resetButton = document.getElementById("resetButton");
const errorMessage = document.getElementById("errorMessage");
const colorPreview = document.getElementById("colorPreview");
const hexLabel = document.getElementById("hexLabel");

const DEFAULT_BG = "#f4f6f8";

// Función para validar y parsear el valor RGB. Recibe el valor como string, devuelve un array de números [r, g, b] o null si no es válido.
function parseRGB(value) {
  const parts = value.trim().split(",");
  if (parts.length !== 3) return null;
  const nums = parts.map((p) => parseInt(p.trim(), 10));
  if (nums.some((n) => isNaN(n) || n < 0 || n > 255)) return null;
  return nums;
}

// Función para convertir valores RGB a hexadecimal. Recibe tres números (r, g, b) y devuelve un string con el formato "#rrggbb".
function toHex(r, g, b) {
  return "#" + [r, g, b].map((n) => n.toString(16).padStart(2, "0")).join("");
}

function setMessage(msg) {
  errorMessage.textContent = msg;
}

function applyColor() {
  // Obtenemos el valor del input y lo parseamos como RGB
  const raw = rgbInput.value;
  const rgb = parseRGB(raw);

  // Si el valor obtenido es null, significa que no es un RGB válido, por lo que mostramos un mensaje de error y salimos de la función
  if (!rgb) {
    setMessage("Valor RGB no valido. Usa el formato: r, g, b (0-255 cada uno).");
    return;
  }

  // Deconstruimos el array rgb para obtener r, g, b
  const [r, g, b] = rgb;

  // Construimos el string RGB para mostrar y el valor hexadecimal
  const hex = toHex(r, g, b);

  // Aplicamos el color al panel de vista previa y actualizamos las etiquetas de información
  colorPreview.style.backgroundColor = hex;
  hexLabel.textContent = hex;

  // Limpiamos el mensaje de error
  setMessage("");
}

// Función para restablecer el color al valor por defecto y limpiar los campos de información
function resetColor() {
  colorPreview.style.backgroundColor = DEFAULT_BG;
  hexLabel.textContent = "—";
  rgbInput.value = "";
  setMessage("");
}


// Agregamos los event listeners a los botones y al input para manejar las interacciones del usuario
applyButton.addEventListener("click", applyColor);
resetButton.addEventListener("click", resetColor);

// Función que se ejecuta al cargar la página
window.onload = function () {
  iniciarBienvenida();
};

// Función de bienvenida
function iniciarBienvenida() {
  const nombre = prompt("¡Bienvenido! ¿Cuál es tu nombre?");
  const colorPreferido = prompt("¿Cuál es tu color preferido?");

  // Cambiar el color de fondo usando el DOM
  document.body.style.backgroundColor = colorPreferido;

  // Mostrar mensaje de bienvenida en el game-area
  const gameArea = document.getElementById("game-area");
  gameArea.innerHTML = `<h2>¡Bienvenido ${nombre}!</h2>`;
}

// Función para limpiar el game-area
function limpiarGameArea() {
  document.getElementById("game-area").innerHTML = "";
}

// Juego de Hermanos
function jugarHermanos() {
  const gameArea = document.getElementById("game-area");
  const cantidadHermanos = parseInt(prompt("¿Cuántos hermanos tienes?"));

  if (isNaN(cantidadHermanos)) {
    gameArea.innerHTML = "<p>Por favor ingresa un número válido</p>";
    return;
  }

  // Crear lista ordenada
  const lista = document.createElement("ol");
  lista.className = "hermanos-lista";

  // Añadir cada hermano a la lista
  for (let i = 0; i < cantidadHermanos; i++) {
    const nombreHermano = prompt(`Ingresa el nombre de tu hermano/a ${i + 1}:`);
    const elementoLista = document.createElement("li");
    elementoLista.textContent = nombreHermano;
    lista.appendChild(elementoLista);
  }

  // Limpiar y mostrar la lista en el game-area
  gameArea.innerHTML = "<h3>Lista de Hermanos</h3>";
  gameArea.appendChild(lista);
}

// Juego de Bloques
function jugarBloques() {
  const gameArea = document.getElementById("game-area");
  const cantidadBloques = parseInt(prompt("¿Cuántos bloques quieres crear?"));

  if (isNaN(cantidadBloques)) {
    gameArea.innerHTML = "<p>Por favor ingresa un número válido</p>";
    return;
  }

  gameArea.innerHTML = "<h3>Bloques Generados</h3>";

  // Crear y añadir cada bloque
  for (let i = 0; i < cantidadBloques; i++) {
    const bloque = document.createElement("div");
    bloque.className = "bloque";
    bloque.style.backgroundColor = generarColorAleatorio();
    gameArea.appendChild(bloque);
  }
}

// Función auxiliar para generar colores aleatorios
function generarColorAleatorio() {
  const letras = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letras[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Juego Yankenpo
function jugarYankenpo() {
  const gameArea = document.getElementById("game-area");
  const opciones = ["piedra", "papel", "tijera"];
  const eleccionUsuario = prompt("Elige: piedra, papel o tijera").toLowerCase();

  if (!opciones.includes(eleccionUsuario)) {
    gameArea.innerHTML = "<p>Por favor elige una opción válida</p>";
    return;
  }

  const eleccionComputadora =
    opciones[Math.floor(Math.random() * opciones.length)];
  let resultado, clase;

  // Determinar el ganador
  if (eleccionUsuario === eleccionComputadora) {
    resultado = "¡Empate!";
    clase = "empate";
  } else if (
    (eleccionUsuario === "piedra" && eleccionComputadora === "tijera") ||
    (eleccionUsuario === "papel" && eleccionComputadora === "piedra") ||
    (eleccionUsuario === "tijera" && eleccionComputadora === "papel")
  ) {
    resultado = "¡Ganaste!";
    clase = "ganador";
  } else {
    resultado = "¡Perdiste!";
    clase = "perdedor";
  }

  // Mostrar resultado en el game-area
  gameArea.innerHTML = `
                          <div class="resultado ${clase}">
                              <h3>${resultado}</h3>
                              <p>Tu elección: ${eleccionUsuario}</p>
                              <p>Elección de la computadora: ${eleccionComputadora}</p>
                          </div>
                      `;
}

document.addEventListener("DOMContentLoaded", function () {
//Animación del texto:
const path = document.querySelectorAll(".rutinaTitulo .path");

  path.forEach((path) => {
    path.style.stroke = "transparent"; // Oculta el trazo inicial
  });

  const animation = {
    targets: ['.rutinaTitulo','path'],
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutSine",
    duration: 2000,
    delay: anime.stagger(100), // Añade un pequeño retraso a cada trazo
    direction: "alternate",
    loop: false,
  };

  anime(animation);


//Agregar tareas y editar tareas por defecto
const btnAgregar = document.getElementById("agregarTarea");
const contenedorDeTareas = document.getElementById("contenedorTareas");

//Agregamos una tarea a la lista al dar click
btnAgregar.addEventListener("click", () => {
  //Creamos un nuevo li
  const nuevoLi = document.createElement("li");
  //Creamos un unput para agregar la nueva tarea y agregamos un placeholder
  const nuevoInput = document.createElement("input");
  nuevoInput.setAttribute("type", "text");
  nuevoInput.setAttribute("placeholder", "Ingresa tu tarea aquí");
  // Paso 5: Agrega una clase CSS al input de texto
  nuevoInput.classList.add("tareaInput");

  //Agegamos el nuevo input al elmento li
  nuevoLi.appendChild(nuevoInput);

  // Agregar el elemento <span> con clase "eliminar" y contenido "-" al lado del input
  const eliminarSpan = document.createElement("span");
  eliminarSpan.classList.add("eliminar");
  eliminarSpan.textContent = "-";
  nuevoLi.appendChild(eliminarSpan); // Agregar el elemento <span> al <li>

  contenedorDeTareas.appendChild(nuevoLi);

  nuevoInput.focus();

  // Selecciona todos los elementos <li> que contienen las tareas
  const tareas = document.querySelectorAll("#contenedorTareas li");

  tareas.forEach(function (tarea) {
    const eliminar = tarea.querySelector(".eliminar");
    const input = tarea.querySelector(".tareaInput");

    // Agrega un oyente de eventos al icono de eliminar
    eliminar.addEventListener("click", function () {
      tarea.remove(); // Elimina la tarea cuando se hace clic en el icono de eliminar
    });

    // Agrega un oyente de eventos para mostrar el icono de eliminar al pasar el ratón sobre la tarea
    tarea.addEventListener("mouseenter", function () {
      eliminar.style.display = "inline";
    });

    // Agrega un oyente de eventos para ocultar el icono de eliminar al sacar el ratón de la tarea
    tarea.addEventListener("mouseleave", function () {
      eliminar.style.display = "none";
    });
  });
});

// Función para contar las tareas y mostrar el resultado en la consola
function contarTareas() {
  const tareas = document.querySelectorAll(".tareaInput");
  const cantidadTareas = tareas.length;
  porcentaje = 100;
  resultado= (porcentaje/cantidadTareas);
  alert("Cada una de tus tareas valdran: " + resultado + " puntos");
  /*Aqui agregue las siguientes 4 lienas de código lo que vamos a tener que hacer es: YA se 
  oculta el código principal, ahora vamos a tener que mostrar la exportación de las tareas
  y lo que sería ya la Ineterfaz principal*/
  exportarTareas = cantidadTareas;
  exportarTareas.value;
  const ocultarContenido = document.getElementById("contenidoPrincipal");
  ocultarContenido.style.display="none";
}


// Agrega un evento al botón para contar las tareas
const btnContarTareas = document.getElementById("contarTareas");
btnContarTareas.addEventListener("click", contarTareas);
});


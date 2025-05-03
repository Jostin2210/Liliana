function mostrarReferencias() {
  const refDiv = document.getElementById("referencias");
  refDiv.style.display = refDiv.style.display === "none" ? "block" : "none";
}

function validarFormulario() {
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const mensaje = document.getElementById("mensaje").value;

  if (!nombre || !email || !mensaje) {
    alert("Por favor, completa todos los campos.");
    return false;
  }

  alert("Esto es una notificación de prueba, gracias 💌");
  return false; // Evita que el formulario se envíe realmente
}

const dato = localStorage.getItem("datoGuardado");

//En caso de que haya algo guardado lo muestra sino avisa que no existen datos guardados
if (dato) {
  document.getElementById("data").textContent = dato;
} else {
  document.getElementById("data").textContent = "No hay datos guardados.";
};
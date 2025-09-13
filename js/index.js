document.getElementById("buttonText").addEventListener("click", function () {
    
    // Obtener valor del input
    const texto = document.getElementById("inputText").value;

    // Guardar en localStorage
    localStorage.setItem("datoGuardado", texto);
});
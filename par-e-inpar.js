document.addEventListener("DOMContentLoaded", function () {
    const boton = document.getElementById("boton_hi"); 
    const seccion2 = document.getElementById("seccion2");

    boton.addEventListener("click", function () {
        seccion1.style.display = "none";
        seccion2.style.display = "flex"; 
    });
});

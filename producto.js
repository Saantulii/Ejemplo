document.querySelectorAll(".btn-vermas").forEach(button => {
    button.addEventListener("click", function () {
        const producto = this.closest(".producto");
        const id = producto.dataset.id;
        const nombre = producto.dataset.nombre;
        const precio = producto.dataset.precio;
        const imagen = producto.dataset.imagen;

        // Redirigir a producto.html con parámetros
        const url = `producto.html?id=${id}&nombre=${encodeURIComponent(nombre)}&precio=${precio}&imagen=${encodeURIComponent(imagen)}`;
        window.location.href = url;
    });
});

//ACA ARRANCA EL CODIGO DEL PRODUCTO.HTML DE LO QUE ESTA DENTRO DE Contenedor principal del producto 

// Obtener parámetros de la URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const nombre = params.get("nombre");
const precio = params.get("precio");
const imagen = params.get("imagen");

// Crear contenido dinámico del producto
const detalle = `
    <h1>${nombre}</h1>
    <img src="${imagen}" alt="${nombre}">
    <p>Precio: $${precio}</p>
    <button class="btn-agregar" id="btn-agregar">Agregar al carrito</button>
`;
document.getElementById("producto-detalle").innerHTML = detalle;

// Evento para agregar al carrito
const carritoIcono = document.getElementById("carrito-icono");
const contador = document.getElementById("contador");
document.getElementById("btn-agregar").addEventListener("click", () => {
    // Actualizar el contador del carrito
    contador.textContent = parseInt(contador.textContent) + 1;

    // Animación visual para notificar el agregado
    carritoIcono.classList.add("animar");
    setTimeout(() => carritoIcono.classList.remove("animar"), 500);
});

// ACA CIERRA -----------------------------------------------------------------------------------------------

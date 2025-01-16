//ACA ARRANCA EL CARRITO DE COMPRAS  ---------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    const carritoIcono = document.getElementById("carrito-icono");
    const carrito = document.getElementById("carrito");
    const cerrarCarrito = document.getElementById("cerrar-carrito");
    const contador = document.getElementById("contador");
    const carritoLista = document.querySelector(".carrito-lista");
    const carritoTotal = document.querySelector(".carrito-total span");

    let total = 0;
    let cantidad = 0;

    // Abrir carrito
    carritoIcono.addEventListener("click", () => {
        carrito.classList.add("activo");
    });

    // Cerrar carrito
    cerrarCarrito.addEventListener("click", () => {
        carrito.classList.remove("activo");
    });

    // Agregar producto al carrito
    detalleProducto.addEventListener("click", (e) => {
        if (e.target.classList.contains("btn-agregar")) {
            const productoDiv = e.target.closest(".producto");
            const id = productoDiv.dataset.id;
            const nombre = productoDiv.dataset.nombre;
            const precio = parseFloat(productoDiv.dataset.precio);

            // Verificar si el producto ya está en el carrito
            const productoExistente = carritoLista.querySelector(`[data-id="${id}"]`);

            if (productoExistente) {
                // Incrementar cantidad y actualizar subtotal
                const cantidadElemento = productoExistente.querySelector(".cantidad");
                const subtotalElemento = productoExistente.querySelector(".subtotal");

                let cantidadActual = parseInt(cantidadElemento.textContent);
                cantidadActual++;
                cantidadElemento.textContent = cantidadActual;
                subtotalElemento.textContent = (cantidadActual * precio).toFixed(2);
            } else {
                // Agregar nuevo producto al carrito
                const item = document.createElement("div");
                item.classList.add("carrito-item");
                item.dataset.id = id;
                item.innerHTML = `
                    <span class="nombre">${nombre}</span>
                    <span class="precio">$${precio.toFixed(2)}</span>
                    <span class="cantidad">1</span>
                    <span class="subtotal">${precio.toFixed(2)}</span>
                `;
                carritoLista.appendChild(item);
            }

            // Actualizar total y contador
            total += precio;
            cantidad++;
            carritoTotal.textContent = total.toFixed(2);
            contador.textContent = cantidad;
        }
    });
});

// ACA CIERRA -------------------------------------------------------------------------------------------------

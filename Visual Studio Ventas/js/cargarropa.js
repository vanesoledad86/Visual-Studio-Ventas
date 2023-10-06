// Función para cargar tarjetas desde la API de FakeStore
async function cargarTarjetasDesdeAPI() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();

        const tarjetasContainer = document.getElementById('tarjetas-container');

        data.forEach(producto => {
            const tarjeta = document.createElement('div');
            tarjeta.classList.add('tarjeta');
            tarjeta.innerHTML = `
                <img src="${producto.image}" alt="${producto.title}">
                <h2>${producto.title}</h2>
                <p>Precio: $${producto.price}</p>
                <p>Categoría: ${producto.category}</p>
                <p>Descripción: ${producto.description}</p>
            `;
            tarjetasContainer.appendChild(tarjeta);
        });
    } catch (error) {
        console.error('Error al cargar tarjetas desde la API:', error);
    }
}

// Llamar a la función para cargar las tarjetas cuando la página se cargue
window.addEventListener('load', cargarTarjetasDesdeAPI);
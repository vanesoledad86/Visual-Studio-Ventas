const PRECIODOLAR = 1000
const opciones = { style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2 };
async function cargarTarjetasDesdeAPI() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');

        const data = await response.json();

        const tarjetasContainer = document.getElementById('tarjetas-container');

        data.forEach(producto => {
            const tarjeta = document.createElement('div');
            tarjeta.classList.add('tarjeta');
            tarjeta.innerHTML = `
                <a href="../index.html"><img src="${producto.image}" alt="${producto.title}">
                <h3>${producto.title.substring(0, 25)}</h3>  
                <p class="precio">$${(producto.price * PRECIODOLAR).toLocaleString('es-ES', opciones)}</p>
                <p class="categoria">${title(producto.category)}</p>
                <p class="desc">Descripción: ${producto.description.substring(0, 180)}</p></a>
            `;
            tarjetasContainer.appendChild(tarjeta);
        });
    } catch (error) {
        console.error('Error al cargar tarjetas desde la API:', error);
    }
}
function title(cadena) {
    return cadena.charAt(0).toUpperCase() + cadena.slice(1);
}

// Llamar a la función para cargar las tarjetas cuando la página se cargue
window.addEventListener('load', cargarTarjetasDesdeAPI);
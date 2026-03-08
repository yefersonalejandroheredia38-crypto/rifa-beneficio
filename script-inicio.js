// --- CONFIGURACIÓN DE LA META ---
// Copia aquí los mismos números que tienes en tu script de la rifa
const vendidosOficiales = [1, 2, 3, 4, 5]; // Ejemplo: 5 números vendidos
const metaTotal = 1000;

// Función que calcula y llena la barra al cargar la página
window.onload = function() {
    const cantidadVendidos = vendidosOficiales.length;
    const porcentaje = (cantidadVendidos / metaTotal) * 100;
    
    // Actualizamos la barra visualmente
    const barra = document.querySelector('.barra-llena');
    const estadisticas = document.querySelector('.estadisticas p');
    
    if (barra) {
        barra.style.width = porcentaje + "%";
        barra.innerText = Math.floor(porcentaje) + "%";
    }
    
    if (estadisticas) {
        estadisticas.innerHTML = `<strong>${cantidadVendidos}</strong> vendidos de <strong>${metaTotal}</strong>`;
    }
};

// Funciones del Modal de Donación
function abrirDonar() {
    document.getElementById('modal-donar').style.display = 'block';
}

function cerrarDonar() {
    document.getElementById('modal-donar').style.display = 'none';
}

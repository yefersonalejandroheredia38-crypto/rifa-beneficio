// --- 🛒 LISTA DE NÚMEROS VENDIDOS (Cópialos aquí también) ---
const vendidosOficiales = [5, 12, 120, 450, 800]; // Ejemplo: añade los que te paguen

// --- ⚙️ CONFIGURACIÓN DE LA META ---
const metaTotal = 1000;

window.onload = function() {
    const cantidad = vendidosOficiales.length;
    const porcentaje = (cantidad / metaTotal) * 100;
    
    // Actualizar la Barra Verde
    const barra = document.querySelector('.barra-llena');
    if (barra) {
        barra.style.width = porcentaje + "%";
        barra.innerText = Math.floor(porcentaje) + "%";
    }
    
    // Actualizar el Texto de abajo
    const estadisticas = document.querySelector('.meta-progreso h3');
    if (estadisticas) {
        estadisticas.innerHTML = `Llevamos ${cantidad} de ${metaTotal} números vendidos`;
    }
};

// Funciones para el botón de Donar
function abrirDonar() {
    document.getElementById('modal-donar').style.display = 'block';
}

function cerrarDonar() {
    document.getElementById('modal-donar').style.display = 'none';
}

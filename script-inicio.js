// --- 🛒 LISTA DE NÚMEROS VENDIDOS (Actualiza aquí) ---
const vendidosOficiales = [5, 12, 120, 450, 800]; 
const metaTotal = 1000;

window.onload = function() {
    // Calcular estadísticas
    const cantidad = vendidosOficiales.length;
    const faltan = metaTotal - cantidad;
    const porcentaje = (cantidad / metaTotal) * 100;
    
    // Actualizar barra de progreso con animación
    const barra = document.getElementById('barra-progreso');
    if (barra) {
        setTimeout(() => {
            barra.style.width = porcentaje + "%";
            barra.innerText = Math.floor(porcentaje) + "%";
        }, 500);
    }
    
    // Actualizar números en las tarjetas
    document.getElementById('vendidos-num').textContent = cantidad;
    document.getElementById('faltan-num').textContent = faltan;
};

// Funciones para modales
function cerrarBienvenida() {
    document.getElementById('bienvenida-modal').style.display = 'none';
}

function abrirDonar() {
    document.getElementById('modal-donar').style.display = 'flex';
}

function cerrarDonar() {
    document.getElementById('modal-donar').style.display = 'none';
}
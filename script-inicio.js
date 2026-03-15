// ===== LISTA DE NÚMEROS VENDIDOS (actualiza aquí) =====
const vendidosOficiales = []; // Ejemplo
const metaTotal = 1000;

window.onload = function() {
    const cantidad = vendidosOficiales.length;
    const faltan = metaTotal - cantidad;
    const porcentaje = (cantidad / metaTotal) * 100;
    
    // Barra de progreso
    const barra = document.getElementById('barra-progreso');
    if (barra) {
        barra.style.width = porcentaje + "%";
        barra.innerText = Math.floor(porcentaje) + "%";
    }
    
    // Estadísticas
    const vendidosNum = document.getElementById('vendidos-num');
    const faltanNum = document.getElementById('faltan-num');
    if (vendidosNum) vendidosNum.textContent = cantidad;
    if (faltanNum) faltanNum.textContent = faltan;

    // Últimos números vendidos (NUEVO)
    const ultimos = vendidosOficiales.slice(-5).reverse(); // últimos 5 en orden inverso
    const contenedorUltimos = document.getElementById('lista-ultimos');
    if (contenedorUltimos) {
        if (ultimos.length > 0) {
            contenedorUltimos.innerHTML = ultimos.map(num => `<span class="ultimo-numero">${num}</span>`).join('');
        } else {
            contenedorUltimos.innerHTML = '<p>Aún no hay números vendidos</p>';
        }
    }
};

// Funciones de modales
function cerrarBienvenida() {
    document.getElementById('bienvenida-modal').style.display = 'none';
}

function abrirDonar() {
    document.getElementById('modal-donar').style.display = 'flex';
}

function cerrarDonar() {
    document.getElementById('modal-donar').style.display = 'none';
}

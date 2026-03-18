// ===== LISTA DE NÚMEROS VENDIDOS (actualiza aquí) =====
const vendidosOficiales = [11,89, 47, 520, 477, 48, 1, 3, 191, 72, 13, 40, 9, 12, 1000, 614, 247, 508, 507, 931, 295, 165, 261, 226, 832, 8, 74, 148, 150, 855, 210, 461, 34, 43, 16, 5, 956, 966, 988, 421, 24, 35, 421, 24, 163, 567, 168, 133, 714, 27]; // Ejemplo
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

// ===== LISTA DE NÚMEROS VENDIDOS (debe ser la misma que en script-inicio.js) =====
const vendidosOficiales = [11,89, 47, 520, 477, 48, 1, 3, 191, 72, 13, 40, 9, 12, 1000, 614, 247, 508, 507, 931, 295, 165, 261, 226, 832, 8, 74, 148, 150, 855, 210, 461, 34, 43, 16, 5, 956, 966, 988, 421, 24, 35, 421, 24, 163, 567, 168, 133, 714, 27, 472, 33, 696, 310]; // ¡Actualiza aquí también!
const totalNumeros = 1000;
const miTelefono = "584122415696"; // <--- CAMBIA AQUÍ A TU NÚMERO REAL (código país + número sin 0)

let numeroElegido = null;

// Crear los números cuando la página cargue
document.addEventListener('DOMContentLoaded', function() {
    const contenedor = document.getElementById('contenedor-rifa');
    if (!contenedor) return;

    // Ocultar mensaje de carga
    const cargando = document.getElementById('cargando');
    if (cargando) cargando.style.display = 'none';

    for (let i = 1; i <= totalNumeros; i++) {
        const div = document.createElement('div');
        div.classList.add('numero');
        div.id = `n-${i}`;
        div.innerText = i;
        // Variable CSS para retraso de animación (NUEVO)
        div.style.setProperty('--i', i);

        if (vendidosOficiales.includes(i)) {
            div.classList.add('vendido');
        } else {
            div.addEventListener('click', (function(num) {
                return function() { seleccionarNumero(num); };
            })(i));
        }
        contenedor.appendChild(div);
    }

    // Iniciar contador regresivo (NUEVO)
    iniciarContador();
});

// Función para seleccionar número
function seleccionarNumero(num) {
    // Quitar selección anterior
    document.querySelectorAll('.numero.seleccionado').forEach(el => {
        el.classList.remove('seleccionado');
    });

    // Marcar el nuevo
    const elemento = document.getElementById(`n-${num}`);
    if (elemento) elemento.classList.add('seleccionado');

    // Abrir modal
    numeroElegido = num;
    document.getElementById('num-pago').innerText = num;

    // Mensaje especial según el número (NUEVO)
    const mensajeEspecial = document.getElementById('mensaje-especial');
    if (mensajeEspecial) {
        if (num === 1000) mensajeEspecial.innerText = '🎉 ¡Último número! 🎉';
        else if (num % 100 === 0) mensajeEspecial.innerText = '✨ Número redondo ✨';
        else if (num === 7 || num === 77 || num === 777) mensajeEspecial.innerText = '🍀 Número de la suerte 🍀';
        else mensajeEspecial.innerText = '';
    }

    document.getElementById('capa-pago').classList.remove('oculto');
}

// Cerrar modal de pago
function cerrarPago() {
    document.getElementById('capa-pago').classList.add('oculto');
    document.querySelectorAll('.numero.seleccionado').forEach(el => {
        el.classList.remove('seleccionado');
    });
}

// Ir a WhatsApp con mensaje
function irAWhatsapp() {
    if (!numeroElegido) {
        alert('Selecciona un número primero');
        return;
    }

    const mensaje = encodeURIComponent(
        `*RIFA SOLIDARIA*\n\n` +
        `Hola, quiero el número ${numeroElegido} para la rifa. Ya hice el pago. Adjunto comprobante.`
    );

    window.open(`https://wa.me/${miTelefono}?text=${mensaje}`, '_blank');
    cerrarPago();
}

// Buscador
const buscador = document.getElementById('buscador');
if (buscador) {
    buscador.addEventListener('input', function(e) {
        const val = parseInt(e.target.value);
        if (val >= 1 && val <= totalNumeros) {
            const el = document.getElementById(`n-${val}`);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                el.style.borderColor = '#25d366';
                el.style.boxShadow = '0 0 20px #25d366';
                setTimeout(() => {
                    el.style.borderColor = '';
                    el.style.boxShadow = '';
                }, 1500);
            }
        }
    });
}

// CONTADOR REGRESIVO (NUEVO)
function iniciarContador() {
    // CAMBIA ESTA FECHA A LA DE TU SORTEO
    const fechaSorteo = new Date('2026-04-15T20:00:00'); // Formato: Año-Mes-DíaTHora:Minutos
    const intervalo = setInterval(() => {
        const ahora = new Date();
        const diferencia = fechaSorteo - ahora;
        const contadorElem = document.getElementById('contador');
        if (!contadorElem) {
            clearInterval(intervalo);
            return;
        }
        if (diferencia < 0) {
            contadorElem.innerText = '¡Sorteo realizado!';
            clearInterval(intervalo);
            return;
        }
        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
        contadorElem.innerText = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
    }, 1000);
}

// COPIAR DATOS BANCARIOS (NUEVO)
function copiarDatos() {
    const datos = `Banco: 0191 (BNC)\nCédula: V-15.994.903\nTeléfono: 0412-8433443\nMonto: $1 (cambio del día)`;
    navigator.clipboard.writeText(datos).then(() => {
        alert('Datos copiados al portapapeles');
    }).catch(() => {
        alert('No se pudo copiar, selecciona manualmente');
    });
}

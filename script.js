// ===== LISTA DE NÚMEROS VENDIDOS (debe ser la misma que en script-inicio.js) =====
const vendidosOficiales = [5, 12, 120, 450, 800]; // ¡Actualiza aquí también!
const totalNumeros = 1000;
const miTelefono = "584122415696"; // <--- CAMBIA AQUÍ A TU NÚMERO REAL (código país + número sin 0)

let numeroElegido = null;

// Crear los números cuando la página cargue
document.addEventListener('DOMContentLoaded', function() {
    const contenedor = document.getElementById('contenedor-rifa');
    if (!contenedor) return;

    for (let i = 1; i <= totalNumeros; i++) {
        const div = document.createElement('div');
        div.classList.add('numero');
        div.id = `n-${i}`;
        div.innerText = i;
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
});

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
    document.getElementById('capa-pago').classList.remove('oculto');
}

function cerrarPago() {
    document.getElementById('capa-pago').classList.add('oculto');
    document.querySelectorAll('.numero.seleccionado').forEach(el => {
        el.classList.remove('seleccionado');
    });
}

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
// --- LISTA DE NÚMEROS VENDIDOS ---
const vendidosOficiales = [5, 12, 120, 450, 800]; 
const totalNumeros = 1000;
const miTelefono = "584122415696"; // ¡CAMBIA ESTO POR TU NÚMERO REAL!

let numeroElegido = null;

// Elementos del DOM
const contenedor = document.getElementById('contenedor-rifa');
const capaPago = document.getElementById('capa-pago');
const displayNum = document.getElementById('num-pago');

// Verificar elementos
if (!contenedor) console.error('Error: No se encontró el contenedor de números');
if (!capaPago) console.error('Error: No se encontró el modal de pago');
if (!displayNum) console.error('Error: No se encontró el display del número');

// Crear números
function crearNumeros() {
    contenedor.innerHTML = '';
    
    for (let i = 1; i <= totalNumeros; i++) {
        const div = document.createElement('div');
        div.classList.add('numero');
        div.id = `n-${i}`;
        div.innerText = i;
        div.setAttribute('data-numero', i);

        if (vendidosOficiales.includes(i)) {
            div.classList.add('vendido');
        } else {
            div.onclick = () => seleccionarNumero(i, div);
        }
        
        contenedor.appendChild(div);
    }
    
    console.log(`✅ Creados ${totalNumeros} números`);
}

// Seleccionar número
function seleccionarNumero(num, elemento) {
    document.querySelectorAll('.numero.seleccionado').forEach(el => {
        el.classList.remove('seleccionado');
    });
    
    elemento.classList.add('seleccionado');
    
    elemento.style.animation = 'none';
    elemento.offsetHeight;
    elemento.style.animation = 'shake 0.3s ease';
    
    setTimeout(() => {
        abrirPago(num);
    }, 150);
}

function abrirPago(num) {
    numeroElegido = num;
    if (displayNum) displayNum.innerText = num;
    
    if (capaPago) {
        capaPago.classList.remove('oculto');
        
        const numGrande = document.querySelector('.numero-seleccionado-grande');
        if (numGrande) {
            numGrande.style.animation = 'none';
            numGrande.offsetHeight;
            numGrande.style.animation = 'pulse 0.5s ease';
        }
    }
}

function cerrarPago() {
    if (capaPago) capaPago.classList.add('oculto');
    
    document.querySelectorAll('.numero.seleccionado').forEach(el => {
        el.classList.remove('seleccionado');
    });
}

function irAWhatsapp() {
    if (!numeroElegido) {
        alert('❌ Error: No has seleccionado ningún número');
        return;
    }
    
    const msg = encodeURIComponent(
        `*RIFA SOLIDARIA - ALCIDES BOLÍVAR*\n\n` +
        `¡Hola! Quiero comprar el número *${numeroElegido}*.\n\n` +
        `Ya realicé el pago de $1 (Bs equivalente).\n` +
        `Aquí adjunto el comprobante.\n\n` +
        `Quedo atento a la confirmación. ¡Gracias!`
    );
    
    window.open(`https://wa.me/${miTelefono}?text=${msg}`, '_blank');
    cerrarPago();
    alert(`✅ Mensaje preparado para el número ${numeroElegido}`);
}

// Buscador
const buscador = document.getElementById('buscador');
if (buscador) {
    buscador.addEventListener('input', (e) => {
        const val = e.target.value;
        if (val && val >= 1 && val <= totalNumeros) {
            const el = document.getElementById(`n-${val}`);
            if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "center" });
                
                el.style.transform = 'scale(1.1)';
                el.style.borderColor = '#25d366';
                el.style.boxShadow = '0 0 30px #25d366';
                
                setTimeout(() => {
                    el.style.transform = '';
                    el.style.borderColor = '';
                    el.style.boxShadow = '';
                }, 1500);
            }
        }
    });
}

// Iniciar
document.addEventListener('DOMContentLoaded', crearNumeros);
// --- 🛒 LISTA DE NÚMEROS VENDIDOS ---
const vendidosOficiales = [5, 12, 120, 450, 800]; 
const totalNumeros = 1000;
const miTelefono = "584122415696"; // Tu número con código de país

let numeroElegido = null;

// Elementos del DOM
const contenedor = document.getElementById('contenedor-rifa');
const capaPago = document.getElementById('capa-pago');
const displayNum = document.getElementById('num-pago');

// Función para crear los números
function crearNumeros() {
    for (let i = 1; i <= totalNumeros; i++) {
        const div = document.createElement('div');
        div.classList.add('numero');
        div.id = `n-${i}`;
        div.innerText = i;
        div.setAttribute('data-numero', i);

        // Si ya se vendió, clase especial
        if (vendidosOficiales.includes(i)) {
            div.classList.add('vendido');
        } else {
            div.onclick = () => seleccionarNumero(i, div);
        }
        
        contenedor.appendChild(div);
    }
}

// Función para seleccionar número con efecto visual
function seleccionarNumero(num, elemento) {
    // Remover selección anterior
    document.querySelectorAll('.numero.seleccionado').forEach(el => {
        el.classList.remove('seleccionado');
    });
    
    // Agregar selección al nuevo
    elemento.classList.add('seleccionado');
    
    // Pequeña vibración de feedback
    elemento.style.animation = 'none';
    elemento.offsetHeight;
    elemento.style.animation = 'shake 0.3s ease';
    
    // Abrir modal de pago
    setTimeout(() => {
        abrirPago(num);
    }, 150);
}

function abrirPago(num) {
    numeroElegido = num;
    displayNum.innerText = num;
    capaPago.classList.remove('oculto');
    
    // Animación de entrada del número grande
    const numGrande = document.querySelector('.numero-seleccionado-grande');
    numGrande.style.animation = 'none';
    numGrande.offsetHeight;
    numGrande.style.animation = 'pulse 0.5s ease';
}

function cerrarPago() {
    capaPago.classList.add('oculto');
    
    // Remover selección visual al cerrar
    document.querySelectorAll('.numero.seleccionado').forEach(el => {
        el.classList.remove('seleccionado');
    });
}

function irAWhatsapp() {
    const msg = encodeURIComponent(`🎟️ *Rifa Solidaria*\n\n¡Hola! Quiero el número *${numeroElegido}* para la rifa.\nYa realicé el pago. Aquí está el comprobante:`);
    window.open(`https://wa.me/${miTelefono}?text=${msg}`, '_blank');
    cerrarPago();
}

// Buscador mejorado
document.getElementById('buscador').addEventListener('input', (e) => {
    const val = e.target.value;
    if (val && val >= 1 && val <= totalNumeros) {
        const el = document.getElementById(`n-${val}`);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "center" });
            
            // Efecto de búsqueda
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

// Iniciar todo
crearNumeros();

// Añadir animación shake
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
    
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.2); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style);
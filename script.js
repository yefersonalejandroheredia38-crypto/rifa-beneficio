// --- 🛒 LISTA DE NÚMEROS VENDIDOS (Deben ser los mismos de arriba) ---
const vendidosOficiales = [5, 12, 120, 450, 800]; 

const totalNumeros = 1000;
const miTelefono = "584122415696";
let numeroElegido = null;

const contenedor = document.getElementById('contenedor-rifa');
const capaPago = document.getElementById('capa-pago');
const displayNum = document.getElementById('num-pago');

// Crear los 1000 cuadritos
for (let i = 1; i <= totalNumeros; i++) {
    let div = document.createElement('div');
    div.classList.add('numero');
    div.id = `n-${i}`;
    div.innerText = i;

    // Si ya se vendió, lo ponemos gris y bloqueado
    if (vendidosOficiales.includes(i)) {
        div.classList.add('vendido');
    } else {
        div.onclick = () => abrirPago(i);
    }
    
    contenedor.appendChild(div);
}

function abrirPago(num) {
    numeroElegido = num;
    displayNum.innerText = num;
    capaPago.classList.remove('oculto');
}

function cerrarPago() {
    capaPago.classList.add('oculto');
}

function irAWhatsapp() {
    const msg = encodeURIComponent(`¡Hola! Quiero el número ${numeroElegido} para la rifa. Ya hice el pago, aquí el comprobante.`);
    window.open(`https://wa.me/${miTelefono}?text=${msg}`, '_blank');
    cerrarPago();
}

// Buscador para que la gente encuentre su número rápido
document.getElementById('buscador').oninput = (e) => {
    const val = e.target.value;
    const el = document.getElementById(`n-${val}`);
    if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.style.border = "3px solid #25d366";
        setTimeout(() => el.style.border = "1px solid #ddd", 2000);
    }
};

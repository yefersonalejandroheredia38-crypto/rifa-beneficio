const totalNumeros = 1000;
const contenedor = document.getElementById('contenedor-rifa');
const buscador = document.getElementById('buscador');
const miTelefono = "584122415696";

// Generar los 1000 números
for (let i = 1; i <= totalNumeros; i++) {
    let div = document.createElement('div');
    div.classList.add('numero');
    div.id = `n-${i}`;
    div.innerText = i;
    div.onclick = () => confirmar(i, div);
    contenedor.appendChild(div);
}

// Buscador para que la página baje al número escrito
buscador.oninput = () => {
    const n = buscador.value;
    const el = document.getElementById(`n-${n}`);
    if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.style.boxShadow = "0 0 10px #25d366";
        setTimeout(() => el.style.boxShadow = "none", 2000);
    }
};

function confirmar(num, el) {
    const msg = encodeURIComponent(`Hola! Quiero el número ${num} de la rifa.`);
    if(confirm(`¿Quieres el número ${num}?`)) {
        window.open(`https://wa.me/${miTelefono}?text=${msg}`, '_blank');
        el.classList.add('vendido');
    }
}

const totalNumeros = 1000; 
const contenedor = document.getElementById('contenedor-rifa');

// Generar números
for (let i = 1; i <= totalNumeros; i++) {
    let div = document.createElement('div');
    div.classList.add('numero');
    div.innerText = i;
    
    div.onclick = () => {
        if(!div.classList.contains('vendido')) {
            confirmarCompra(i, div);
        }
    };
    contenedor.appendChild(div);
}

function confirmarCompra(num, elemento) {
    // Formato correcto: 58 (país) + número sin el 0 inicial
    const telefono = "584122415696"; 
    // encodeURIComponent convierte los espacios y caracteres especiales para que la web los entienda
    const mensaje = encodeURIComponent(`Hola, quiero el número ${num} de la rifa para la prótesis.`);
    
    if(confirm(`¿Deseas apartar el número ${num}?`)) {
        // Marcamos el número visualmente
        elemento.classList.add('vendido');
        
        // Abrimos WhatsApp con el formato oficial: wa.me/numero?text=mensaje
        window.open(`https://wa.me/${telefono}?text=${mensaje}`, '_blank');
    }
}



import validator from './validator.js';

document.getElementById("botaoEnviar").addEventListener("click", finalizarCompra)

function finalizarCompra (e){
  e.preventDefault();
    console.log("finalizar")
    const valorInput = document.getElementById("cardNumber").value
    console.log(valorInput)

    
    
    const a = validator.isValid(valorInput)
    console.log(a)
    
    
}


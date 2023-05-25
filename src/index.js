import validator from './validator.js';

document.getElementById("botaoEnviar").addEventListener("click", finalizarCompra)

function finalizarCompra(e) {
  e.preventDefault();

  const valorInput = document.getElementById("cardNumber").value

  const a = validator.isValid(valorInput)
  const cardMask = validator.maskify(valorInput);
  if (a) {
    alert('O cartão número:' + cardMask + ' é válido');
  } else {
    alert('O cartão número:' + cardMask + ' é inválido');
  }
  console.log(a)


}


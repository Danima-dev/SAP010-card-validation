const validator = {

  isValid: function (cardNumber) {

    //Inverter a ordem dos números 
    var inputNumero = cardNumber.split('').reverse().join('')
    console.log(inputNumero)
    // multiplicar os números  impares
    let totalDeSoma = 0
    for (var i = 0; i < inputNumero.length; i++) {
      let digito = parseInt(inputNumero[i]);

      if (i % 2 === 1) { //Posição par 
        digito *= 2; //Pegando a posição do digito e multiplicando por 2

        if (digito > 9) {
          digito -= 9; //Se o número for maior que 9 subtrair 
        }
      }

      totalDeSoma += digito;

      //Se o resto da divisão de i por 2 não for 1, mantem o mesmo número

    }

    return totalDeSoma % 10 === 0;
  },
  maskify: function (cardNumber) {
    const x = cardNumber.split('');
    for (let i = 0; i < x.length - 4; i++) {
      x[i] = '#';
    }
    const maskedCard = x.join('');
    return maskedCard
  }

};




export default validator;

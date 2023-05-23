const validator = {

        isValid:function (cardNumber){
     
            console.log("chamou validator", cardNumber)

            //Inverter a ordem dos números 
            var inputnumero = cardNumber.split('').reverse().join('')
            console.log(inputnumero)
            // multiplicar os números indíces impares
            let totalDenumeros = 0
            for (var i = 0; i < inputnumero.length; i++){
            if (i % 2 !== 0){
              let multiplicarNumero = inputnumero[i] * 2;
              console.log(multiplicarNumero)

              if(multiplicarNumero > 9){
                  const numeroAtual = multiplicarNumero.join('').split('');
                  multiplicarNumero = parseInt(numeroAtual[0]) + parseInt(numeroAtual[1])
                  console.log(multiplicarNumero)
                  totalDenumeros += multiplicarNumero
                }else {
                  totalDenumeros += multiplicarNumero
                }
              
              }else  {
                totalDenumeros += parseInt(inputnumero[i]);
              } 
              //Se o resto da divisão de i por 2 não for zero, mantem o mesmo número
              if(totalDenumeros % 10 === 0){
                return true;
              }else{
                return false;
              }
            
          }

          
          
          //somar todos os números 
          //Verificar se a soma é divisível por 10 
          //Se for divisível por 10 ele é válido se não Inválido

        },

        maskify: function(cardNumber){
          const x = cardNumber.split('');
          for (let i=0; i< x.length - 4; i++){
            x[i] = '#';
          }
          const maskedCard = x.join('');
          return maskedCard
        }

};


  

export default validator;

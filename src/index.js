
let inputCodeCard = '1234554222565851';
const cl = console.log;
let sum = 0;

// do {
//   let inputCodeCard = prompt('Ingrese su número de tarjeta de crédito');   
// } while (!inputCodeCard || isNaN(inputCodeCard) || (inputCodeCard.length !== 16));


let isValidCard = (parametro) => {
  let array = Array.from(inputCodeCard); // Convertirmos input en un array
  let arrReverse = array.reverse(); // invertimos el array
  // filtramos los indices pares para luego multiplicarlo por dos
  arrReverse.filter((value, index, arr) => {
    if (index % 2 === 0) {
      let numberByTwo = value * 2;
      let resultSumPar = numberByTwo.toString().split('').reduce((r, n) => {
        return r + parseInt(n);
      }, 0);

      cl(typeof(resultSumPar));
      // cl( xxx.concat(xxx));


    }

  });
};
// Validando tarjeta
// sum % 10 === 0 ? cl('Tu número de tarjeta es VÁLIDA') : cl('Tu número de tarjeta es INVÁLIDA');


// Llamando a la función
isValidCard(inputCodeCard);
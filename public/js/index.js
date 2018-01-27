'use strict';

// Solicitando al usuario su número de tarjeta de crédito
var cl = console.log;
do {
  var inputCodeCard = prompt('Ingrese su número de tarjeta de crédito \nNota: Recuerde que no puede ingresar espacios vacíos, letras o más de 16 dígitos');
} while (!inputCodeCard || isNaN(inputCodeCard) || inputCodeCard.length !== 16);

// Creando función para validar tarjeta
function isValidCard(inputCodeCard) {
  var arrReverse = []; // Creando un array donde se almacenarán los números de la tarjeta en orden inverso
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = inputCodeCard[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var val = _step.value;

      arrReverse.unshift(parseInt(val));
      // cl(arrReverse);
    }
    // Obteniendo números en posición par
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  for (var j = 1; j < arrReverse.length; j = j + 2) {
    if (arrReverse[j] * 2 >= 10) {
      var numberByTwo = arrReverse[j] * 2;
      // Si el valor de la multiplicación es de dos dígitos: sumar digitos y luego reemplzar en arrReverse
      arrReverse[j] = parseInt(numberByTwo.toString(10)[0]) + parseInt(numberByTwo.toString(10)[1]);
    } else {
      // Si el valor de la multiplicación es de un dígito, se reemplaza en arrReverse
      arrReverse[j] = arrReverse[j] * 2;
    }
    // Sumando los digitos de la tarjeta
    var sum = 0;
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = arrReverse[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var _val = _step2.value;

        sum = sum + _val;
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  }
  // Validando tarjeta
  if (sum % 10 === 0) {
    return alert('Tu número de tarjeta es VÁLIDA');
  } else {
    return alert('Tu número de tarjeta es INVÁLIDA');
  }
}

// Llamando a la función
isValidCard(inputCodeCard);
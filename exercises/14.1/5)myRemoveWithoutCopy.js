let assert = require('assert')

function myRemoveWithoutCopy(arr, item) {
  var i;
  var len;

  for (i = 0, len = arr.length; i < len; i++) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i--;
      len--;
    }
  }

  return arr;
}

/* 
A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem o elemento item caso ele exista no array
Verique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
Verique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
Faça uma chamada para a função myRemoveWithoutCopy e verique que o array passado por parâmetro sofreu alterações
Verique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado.
*/

function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  var CantiElemento = [];
  array.filter(recibirElemento);
  function recibirElemento(elemento){
    if(elemento > 10){
      CantiElemento.push(elemento);
    }  
  }
  return CantiElemento.length;
}

module.exports = contarElementosMayoresA10;

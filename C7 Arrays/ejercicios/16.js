function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  var resultado = [];
  array.filter(recibirElemento);
  function recibirElemento(elemento,indice){
    resultado.push(elemento * indice);
  }
  return resultado;  
}

module.exports = multiplicarElementosPorIndice;

function map(array, cb) {
  // Itera sobre el arreglo y por cada elemento, pasárselo como argumento al callback.
  // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
  // Retorna el nuevo arreglo.
  // Tu código:
  var resultado = array.map(recibiElemento);

  function recibiElemento(elemento){
    return cb(elemento);
  }

  return resultado;


}

module.exports = map;

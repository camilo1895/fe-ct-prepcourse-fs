function forEach(array, cb) {
  // Recibes un arreglo y un callback.
  // Itera sobre el arreglo y por cada elemento iterado, ejecuta el callback con este valor.
  // Tu código:
  var resultado = array.forEach(recibirElemento);
  function recibirElemento (elemento){
    return cb(elemento);
  }
  return resultado;
  
}


module.exports = forEach;

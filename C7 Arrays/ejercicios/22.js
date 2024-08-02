function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  tablaDelSeis = array;
  var array = [0,1,2,3,4,5,6,7,8,9,10];
  var resultado = [];
  for (var i = 0; i < array.length; i++){
    resultado.push(array[i] * 6);
  }
  return resultado;
}

module.exports = tablaDelSeis;

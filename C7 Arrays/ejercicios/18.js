function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  var resultado = 0;
  for (var i = 0; i < resultadosTest.length; i++){
    resultado = resultado + resultadosTest[i];
  }
  return resultado / resultadosTest.length;
}

module.exports = promedioResultadosTest;

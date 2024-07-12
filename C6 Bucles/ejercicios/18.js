function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  var operacion = 1;
    for(var i = a; i <= b; i ++){
       operacion = operacion * i;
    }
    return Math.abs(operacion);
}

module.exports = productoEntreNúmeros;
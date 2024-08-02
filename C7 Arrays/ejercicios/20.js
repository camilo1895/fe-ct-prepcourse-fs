function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  function recibirElemento(elemento){
    return elemento === array[0];
   }
  return array.every(recibirElemento);
 
}

module.exports = todosIguales;

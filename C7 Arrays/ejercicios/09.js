function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
   if(array.length === 1){
      return array[0];
   }else if (array.length === 0){
      return undefined;
   }else{
      var resultado = Math.floor(Math.random() * array.length);
      return resultado;
   }


  
}

module.exports = obtenerElementoAleatorio;

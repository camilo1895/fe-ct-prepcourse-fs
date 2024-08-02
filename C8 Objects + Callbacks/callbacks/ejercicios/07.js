function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   var resultado = arrayOfStrings.filter(recibirElemento);

   function recibirElemento(elemento){

      if (elemento[0] === "a"){
         return elemento;
      }
   }
   return resultado;
}


module.exports = filter;

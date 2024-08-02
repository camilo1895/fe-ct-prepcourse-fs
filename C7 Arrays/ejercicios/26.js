function encontrarPrimerMultiploDeN(n, secuencia) {
  // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
  // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
  // Usa un break para detener el bucle una vez halles el múltiplo.
  // Tu código:
  for (var i = 1; i < secuencia.length; i++){
   var multiplicar = n * i;
   if(secuencia.includes(multiplicar)){
    return multiplicar;
   }
  }
  return undefined;

}

module.exports = encontrarPrimerMultiploDeN;
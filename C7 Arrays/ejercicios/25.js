function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:
  var resultado = [];
if(numeros.length === 0){
  return 0;
}else{
  for (var i = 0; i < numeros.length; i++){
    if(numeros[i] % 2 === 0){
      resultado.push(numeros[i]);
    }else{
      continue;
    }
  }
  if(resultado.length === 0){
    return 0;
  }else{
    return resultado.length;
  }
}
 
}

module.exports = contarParesConContinue;

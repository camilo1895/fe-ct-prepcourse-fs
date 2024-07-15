function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  var NunDuplicados = [];
  for(var i = 0; i < array.length; i++){
    if(array[i] <= 0 || array[i] >= 0){
      var mul = array[i] * 2;
      NunDuplicados.push(mul);
    }else{
      return undefined;
    }  
  }
return NunDuplicados;
  
}

module.exports = duplicarElementos;

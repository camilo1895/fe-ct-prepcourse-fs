function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  for (var i = 0; i < array.length; i++){
    if (array[i] === Math.max(...array)){
      return i;
    }else if(array === false){
    return 0;
  }}
}

module.exports = encontrarIndiceMayor;

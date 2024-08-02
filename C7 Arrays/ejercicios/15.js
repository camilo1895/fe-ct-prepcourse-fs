function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
if(array.length === 0){
    return 0;
}else{
	for (var i = 0; i < array.length; i++){
    	if (array[i] === Math.max(...array)){
     		 return i;
    	}
	}
	}
}

module.exports = encontrarIndiceMayor;

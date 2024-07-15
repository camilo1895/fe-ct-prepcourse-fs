function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
var NumPares = [];

  for(var i = 0; i < array.length; i++){ // mixta y pares
    if(array[i] % 2 === 0){
	NumPares.push(array[i]); 
    }
}
return (NumPares);

var imNumPares = array.every(recibirElemento);

function recibirElemento(elemento){

	if(!elemento % 2 === 0){
	return ([]);
}
}
}

module.exports = filtrarNumerosPares;

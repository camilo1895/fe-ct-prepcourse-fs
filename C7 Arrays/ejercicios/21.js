function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  var resultado = [];
  if(array.includes("Enero") && array.includes("Marzo") && array.includes("Noviembre")){
    for (var i = 0; i < array.length; i++){
      if(array[i] === "Enero"){
        resultado.push("Enero");
      }else if (array[i] === "Marzo"){
        resultado.push("Marzo");
      }else if (array[i] === "Noviembre"){
        resultado.push("Noviembre");
    }   
  }
  }else{
    return "No se encontraron los meses pedidos";
  }
  return resultado;
}

module.exports = mesesDelAño;

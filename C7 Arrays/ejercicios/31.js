function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  var resultado = texto.split("");

  var cambiarorden = resultado.reverse();
  return cambiarorden.join("");

}

module.exports = invertirTexto;

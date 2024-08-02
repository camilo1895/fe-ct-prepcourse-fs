function verificarPassword(objetoUsuario, password) {
  // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:
  for (var prop in objetoUsuario){
    if (password === objetoUsuario[prop]){
      return true;
     }else{
      return false;
     }
  }
}

module.exports = verificarPassword;

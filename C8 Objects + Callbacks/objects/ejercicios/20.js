function sumarLikesDeUsuario(objetoUsuario) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
  // Este arreglo contiene objetos (post).
  // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
  // Debes sumar los likes de todos los post y retornar el resultado.
  // Tu código:
   // Accede al arreglo de posts desde el objetoUsuario
   var posts = objetoUsuario.posts;

   // Usa el método reduce para sumar los likes de todos los posts
   var totalLikes = posts.reduce(recibiElemento,0);
   function recibiElemento(suma,post) {
     return (suma + post.likes);
   };
 
   // Retorna el total de likes
   return totalLikes;

}

module.exports = sumarLikesDeUsuario;

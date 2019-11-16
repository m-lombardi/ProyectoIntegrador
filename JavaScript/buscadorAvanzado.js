window.onload = function (){

  var query = new URLSearchParams(location.search)

  var ulGenero = document.querySelector('.miDropDown');
  console.log(ulGenero);
  var liAInsertar = "";
  fetch ("https://api.themoviedb.org/3/genre/tv/list?api_key=0e65f11e4e58cb2a30446418b84e1eb4&language=en-US")
    .then (function(response){
      return response.json ();
    })
    .then (function(myJson){
      console.log(myJson);
      for (var i = 0; i < myJson.genres.length; i++) {
      //console.log(myJson.genres[i].name)
      liAInsertar = '<li class="uk-active"><a href="generos.html'+ "?id="+myJson.genres[i].id + "&" + "name="
      liAInsertar += myJson.genres[i].name + '">'
      liAInsertar +=  myJson.genres[i].name
      liAInsertar += '</a></li>'
      ulGenero.innerHTML += liAInsertar
      console.log (liAInsertar)
      }
})

  var sort_by = query.get ('sort')
  console.log (sort_by)
  fetch https://api.themoviedb.org/3/discover/tv?api_key=0e65f11e4e58cb2a30446418b84e1eb4&sort_by=popularity.asc&with_genres=18&with_keywords=FRIENDS







}




// aca tenemos que hacer lo mismo que con el buscador simple pero el fetch va a tener muchos puntos distintos, no uno como el otro, entonces vamos a declarar muchas variables y completamos el html que va a tener el formulario con las cosas que queremos que pueda buscar el usuario

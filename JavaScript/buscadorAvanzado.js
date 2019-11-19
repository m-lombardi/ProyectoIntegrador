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

  var generoAvanzado = query.get ('genero')
  console.log(generoAvanzado);

  var keyword = query.get ('keyword')
  console.log(keyword);

  fetch(`https://api.themoviedb.org/3/discover/tv?api_key=0e65f11e4e58cb2a30446418b84e1eb4&with_genres=` + generoAvanzado + `&with_keywords=` + keyword)
    .then(function(res) {
      return res.json()
    })
    .then(function(myJson){
      var posterURL= 'https://image.tmdb.org/t/p/original'
      var elementoHTML= document.querySelector('.rated')
      console.log(myJson);
      var contenidoParaInsertar = ""

      for (var i=0; i < myJson.results.length; i++){
        //myJson.results[i]
        // console.log ( myJson.results[i].name )
        // console.log (posterURL+myJson.results[i].poster_path)
        contenidoParaInsertar = '<li>'
        contenidoParaInsertar += '<img class="uk-height-small" src="'+ posterURL+ myJson.results[i].backdrop_path + '" alt="">'
        contenidoParaInsertar += '<div class="uk-panel subtitulo2 "><h2>'+ myJson.results[i].name + '</h2></div>'
        contenidoParaInsertar += '</li>'
        elementoHTML.innerHTML += contenidoParaInsertar
       }

    })
    .catch(function(error){
      console.log(error);
    })







}




// aca tenemos que hacer lo mismo que con el buscador simple pero el fetch va a tener muchos puntos distintos, no uno como el otro, entonces vamos a declarar muchas variables y completamos el html que va a tener el formulario con las cosas que queremos que pueda buscar el usuario

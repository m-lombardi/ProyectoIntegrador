window.onload = function () {

  var query = new URLSearchParams(location.search)

  var busqueda = query.get('busqueda')
  console.log(busqueda);

  fetch(`https://api.themoviedb.org/3/search/tv?api_key=0e65f11e4e58cb2a30446418b84e1eb4&language=en-US&query=`+ busqueda +`&page=1`)
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
        contenidoParaInsertar = '<li >'
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

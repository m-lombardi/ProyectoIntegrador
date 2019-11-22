window.onload = function () {

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
        if (myJson.results.length == 0 ) {
          //console.log("no hay resultados con " + busqueda);
          var resultado = document.querySelector ('.resultado');
          resultado.innerText = "No se han encontrado resultados para: " + busqueda
        }else {


      for (var i=0; i < myJson.results.length; i++){
        //myJson.results[i]
        // console.log ( myJson.results[i].name )
        // console.log (posterURL+myJson.results[i].poster_path)
        contenidoParaInsertar = '<div class="uk-inline">'
        contenidoParaInsertar += '<a href="detalle.html?id='+myJson.results[i].id+'"><li>'
        contenidoParaInsertar += '<div class="uk-inline-clip uk-transition-toggle uk-light" tabindex="0">'
        contenidoParaInsertar += '<img class="uk-height-small" src="'+ posterURL+ myJson.results[i].backdrop_path + '" alt="">'
        contenidoParaInsertar += '<div class="uk-position-center"><span class="uk-transition-fade icon" uk-icon="icon: plus; ratio: 2"><p class="masinfo">INFO</p></span></div></div>'
        contenidoParaInsertar += '<div class="uk-panel subtitulo2 "><h2>'+ myJson.results[i].name + '</h2></div>'
        contenidoParaInsertar += '</li></a></div>'
        elementoHTML.innerHTML += contenidoParaInsertar
       }
     }
    })
    .catch(function(error){
      console.log(error);
    })



}



var api_key= "0e65f11e4e58cb2a30446418b84e1eb4"

fetch ("https://api.themoviedb.org/3/tv/popular?api_key=0e65f11e4e58cb2a30446418b84e1eb4&language=en-US&page=1")

  .then (function(response){
    return response.json ();
})


.then (function(myJson){
  var posterURL= 'https://image.tmdb.org/t/p/original'
  console.log (myJson);
  for (var i=0; i < myJson.results.length; i++){
    myJson.results[i]
    console.log ( myJson.results[i].name )
    console.log (posterURL +myJson.results[i].poster_path)
    var elementoHTML= document.querySelector ('.populares')

  var contenidoParaInsertar= '<li>'
  contenidoParaInsertar += '<img src="'+posterURL+ myJson.results[i].poster_path+ '" alt="">'
  contenidoParaInsertar += '<div class="uk-position-center uk-panel"><h1>'+ myJson.results[i].name + '</hi></div>'
  contenidoParaInsertar += '</li>'

  elementoHTML.innerHTML += contenidoParaInsertar
}
})
/*
fetch("https://api.themoviedb.org/3/tv/popular?api_key=0e65f11e4e58cb2a30446418b84e1eb4&language=en-US&page=1")
.then(function(response){
  return response.json();
  console.log(response);
})

.then(function(information){
  /* console.log(information) */;
  var arrayDeSeries = information.results
  console.log (information.results);

  for (var i = 0; i < arrayDeSeries.length; i++) {
    var url = ""
    var titulo= arrayDeSeries[i].title
    var imagen= arrayDeSeries[i].poster_path
    var id= arrayDeSeries[i].id
    elementoHTML += "<div class='uk-position-relative uk-visible-toggle uk-light'>"
    elementoHTML += "</div>"

  }

  })

  .catch(function(error) { console.log("Error: " + error);


})
*/

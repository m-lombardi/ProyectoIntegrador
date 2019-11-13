// para poner el nombre del genero

var queryString = location.search;
var queryStringObj = new URLSearchParams(queryString);
console.log(queryStringObj.get('id'));
console.log(queryStringObj.get('name'));
var nombreGenero= queryStringObj.get ('name');
var idGenero = queryStringObj.get ('id');
document.getElementById('tituloGenero').innerHTML = nombreGenero ;

//para poner las series de cada genero//

var api_key= "0e65f11e4e58cb2a30446418b84e1eb4"
fetch ("https://api.themoviedb.org/3/discover/tv?api_key=0e65f11e4e58cb2a30446418b84e1eb4&sort_by=popularity.desc&page=1&with_genres=" + idGenero
  .then (function(response){
    return response.json ();
  })
  .then (function(myJson){
    console.log(myJson);
    var posterURL= 'https://image.tmdb.org/t/p/original'

    console.log (myJson);
    var elementoHTML= document.querySelector('.generardo')
    console.log(elementoHTML);
    var contenidoParaInsertar = ""

    for (var i=0; i < myJson.results.length; i++){

      myJson.results[i]
      // console.log ( myJson.results[i].name )
      // console.log (posterURL+myJson.results[i].poster_path)
      contenidoParaInsertar = '<li>'
      contenidoParaInsertar += '<img src="'+ posterURL+ myJson.results[i].poster_path + '" alt="">'
      contenidoParaInsertar += '<div class="uk-panel subtituloGenero"><h2>'+ myJson.results[i].name + '</h2></div>'
      contenidoParaInsertar += '</li>'
      elementoHTML.innerHTML += contenidoParaInsertar
     }

  })


  .catch(function(error) { console.log("Error: " + error);
  })

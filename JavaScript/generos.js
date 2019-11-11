// para poner el nombre del genero

var queryString = location.search
queryString = new URLSearchParams(queryString)

var nombreGen = queryString.get('nombreGen');
document.querySelector(".nombredegenero").innerHTML= "<h2>" + nombreGen + "</h2>";



//para poner las series de cada genero//

var api_key= "0e65f11e4e58cb2a30446418b84e1eb4"
fetch ("https://api.themoviedb.org/3/discover/tv?api_key=0e65f11e4e58cb2a30446418b84e1eb4&page=1")
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
      contenidoParaInsertar += '<div class="uk-panel"><h2>'+ myJson.results[i].name + '</h2></div>'
      contenidoParaInsertar += '</li>'
      elementoHTML.innerHTML += contenidoParaInsertar
     }

  })


  .catch(function(error) { console.log("Error: " + error);
  })

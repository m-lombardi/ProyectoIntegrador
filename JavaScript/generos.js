// nombre del generosvar idGenero = queryString.get("idgenero")

var api_key= "0e65f11e4e58cb2a30446418b84e1eb4"
fetch ("https://api.themoviedb.org/3/discover/tv?api_key=0e65f11e4e58cb2a30446418b84e1eb4&page=1")
  .then (function(response){
    return response.json ();
  })
  .then (function(myJson){
    console.log(myJson);
    var posterURL= 'https://image.tmdb.org/t/p/original'

    console.log (myJson);
    var elementoHTML= document.querySelector('.generonombre')
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

/* lo de los chicos

  var idGenero = queryString.get("idgenero")
  var nombreGen = queryString.get("nombregenero")
  document.querySelector(".nombredegenero").innerHTML= "<h2 class=generotitulo>" + nombreGen + "</h2>"
  // esto es el nombre del genero

 // esto es el js para las peliculas del genero
  fetch("https://api.themoviedb.org/3/discover/movie?api_key=063b16f0b4b52316bdf354da4c0177d7&sort_by=popularity.desc&include_adult=true&include_video=true&page=1&with_genres=" + idGenero)
  .then(function(response) { return response.json()
  console.log(response);
  })

  .then(function(information) {

    var arrayDePeliculas= information.results

    console.log(information.results);

      for (var i = 0; i < arrayDePeliculas.length; i++) {
        var titulo= arrayDePeliculas[i].original_title
        var imagen= arrayDePeliculas[i].poster_path
        var id= arrayDePeliculas[i].id
        var url = "https://image.tmdb.org/t/p/original"
          elementoHTML = "<div class='uk-position-center uk-panel'>"
          elementoHTML += "</div>"
          document.querySelector(".generardo").innerHTML+= "<li> <a href= detalle.html?idmovie="+ id + "><figure class=imghvr-zoom-out-down style=background-color:black;><img src= " + url + imagen + ">" + "<figcaption class=masinfo style=background-color:black;> MÁS INFORMACIÓN </figcaption></figure>" + elementoHTML + "</a></li>"

  }


  })

  .catch(function(error) { console.log("Error: " + error);
  })

*/

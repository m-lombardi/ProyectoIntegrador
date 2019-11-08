

var api_key= "0e65f11e4e58cb2a30446418b84e1eb4"
fetch ("https://api.themoviedb.org/3/tv/popular?api_key=0e65f11e4e58cb2a30446418b84e1eb4&language=en-US&page=1")
  .then (function(response){
    return response.json ();
  })
  .then (function(myJson){
    console.log(myJson);
    var posterURL= 'https://image.tmdb.org/t/p/original'

    console.log (myJson);
    var elementoHTML= document.querySelector('.populares')
    console.log(elementoHTML);
    var contenidoParaInsertar = ""

    for (var i=0; i < myJson.results.length; i++){

      myJson.results[i]
      // console.log ( myJson.results[i].name )
      // console.log (posterURL+myJson.results[i].poster_path)
      contenidoParaInsertar = '<li>'
      contenidoParaInsertar += '<img src="'+ posterURL+ myJson.results[i].poster_path + '" alt="">'
      contenidoParaInsertar += '<div class="uk-panel subtitulo1"><h2>'+ myJson.results[i].name + '</h2></div>'
      contenidoParaInsertar += '</li>'
      elementoHTML.innerHTML += contenidoParaInsertar
     }

  })


  var api_key= "0e65f11e4e58cb2a30446418b84e1eb4"
  fetch ("https://api.themoviedb.org/3/tv/top_rated?api_key=0e65f11e4e58cb2a30446418b84e1eb4&language=en-US&page=1")
    .then (function(response){
      return response.json ();
    })
    .then (function(myJson){
      console.log(myJson);
      var posterURL= 'https://image.tmdb.org/t/p/original'

      console.log (myJson);
      var elementoHTML= document.querySelector('.rated')
      console.log(elementoHTML);
      var contenidoParaInsertar = ""

      for (var i=0; i < myJson.results.length; i++){

        myJson.results[i]
        // console.log ( myJson.results[i].name )
        // console.log (posterURL+myJson.results[i].poster_path)
        contenidoParaInsertar = '<li >'
        contenidoParaInsertar += '<img class="uk-height-small" src="'+ posterURL+ myJson.results[i].backdrop_path + '" alt="">'
        contenidoParaInsertar += '<div class="uk-panel subtitulo2 "><h2>'+ myJson.results[i].name + '</h2></div>'
        contenidoParaInsertar += '</li>'
        elementoHTML.innerHTML += contenidoParaInsertar
       }

    })

  var api_key= "0e65f11e4e58cb2a30446418b84e1eb4"
  fetch ("https://api.themoviedb.org/3/tv/airing_today?api_key=0e65f11e4e58cb2a30446418b84e1eb4&language=en-US&page=1")
    .then (function(response){
      return response.json ();
    })
    .then (function(myJson){
      console.log(myJson);
      var posterURL= 'https://image.tmdb.org/t/p/original'

      console.log (myJson);
      var elementoHTML= document.querySelector('.aire')
      console.log(elementoHTML);
      var contenidoParaInsertar = ""

      for (var i=0; i < myJson.results.length; i++){

        myJson.results[i]
        // console.log ( myJson.results[i].name )
        // console.log (posterURL+myJson.results[i].poster_path)
        contenidoParaInsertar = '<li >'
        contenidoParaInsertar += '<img class="uk-height-small" src="'+ posterURL+ myJson.results[i].backdrop_path + '" alt="">'
        contenidoParaInsertar += '<div class="uk-panel subtitulo3"><h2>'+ myJson.results[i].name + '</h2></div>'
        contenidoParaInsertar += '</li>'
        elementoHTML.innerHTML += contenidoParaInsertar
         }

      })

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
          console.log(myJson.genres[i].name)
          liAInsertar = '<li class="uk-active"><a href="https://api.themoviedb.org/3/discover/tv?api_key=0e65f11e4e58cb2a30446418b84e1eb4&sort_by=popularity.desc&page=1&with_genres='+myJson.genres[i].id +'">'
          liAInsertar +=  myJson.genres[i].name
          liAInsertar += '</a></li>'
          ulGenero.innerHTML += liAInsertar
          console.log (liAInsertar)
          }
})

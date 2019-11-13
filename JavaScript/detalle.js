window.onload = function(){

  var query = new URLSearchParams(location.search)

  var idSerie = query.get('id')

  fetch ("https://api.themoviedb.org/3/tv/"+idSerie+"?api_key=0e65f11e4e58cb2a30446418b84e1eb4&language=en-US")
    .then (function(response){
      return response.json ();
    })
    .then (function(data){
      console.log(data);
      var posterURL= 'https://image.tmdb.org/t/p/original'

      // console.log (myJson);
      // var elementoHTML= document.querySelector('.populares')
      // console.log(elementoHTML);
      // var contenidoParaInsertar = ""



    })

}

// tenemos que poner en el html todos los h1/h2 que queremos que aparezcan y para cambiarlos los capturamos por su clase con javascript (con un document.querySelector)

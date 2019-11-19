window.onload = function(){

  var query = new URLSearchParams(location.search)

  var idSerie = query.get('id')

  var ulGenero = document.querySelector('.miDropDown');
  console.log(ulGenero);
  var liAInsertar = "";

  var arrayGeneros = []

  fetch ("https://api.themoviedb.org/3/genre/tv/list?api_key=0e65f11e4e58cb2a30446418b84e1eb4&language=en-US")
    .then (function(response){
      return response.json ();
    })
    .then (function(myJson){
      // console.log(myJson);
      for (var i = 0; i < myJson.genres.length; i++) {
      //console.log(myJson.genres[i].name)

      arrayGeneros.push(myJson.genres[i].id)
      arrayGeneros.push(myJson.genres[i].name)

      liAInsertar = '<li class="uk-active"><a href="generos.html'+ "?id="+myJson.genres[i].id + "&" + "name="
      liAInsertar += myJson.genres[i].name + '">'
      liAInsertar +=  myJson.genres[i].name
      liAInsertar += '</a></li>'
      ulGenero.innerHTML += liAInsertar
      // console.log (liAInsertar)
      }
    })

  fetch ("https://api.themoviedb.org/3/tv/" + idSerie + "?api_key=0e65f11e4e58cb2a30446418b84e1eb4&language=en-US")
    .then (function(response){
      return response.json ();
    })
    .then (function(myJson){
      console.log(myJson);
      var posterURL= 'https://image.tmdb.org/t/p/original'
      // console.log (myJson);
      var elementoHTML= document.querySelector('.detalledeserie')
      //console.log(elementoHTML);
      var contenidoParaInsertar = ""

        // for (var i = 0; i < myJson.results.length; i++) {
        //    myJson.results[i]
        //  }

         var titulo= document.querySelector('.titulo');
         titulo.innerText = myJson.original_name
         var idioma= document.querySelector('.idioma');
         idioma.innerText = "Idioma: " + myJson.original_language
         var imagen= document.querySelector ('.foto');
         imagen.src = posterURL + myJson.poster_path
         var sinopsis= document.querySelector ('.sinopsis');
         sinopsis.innerText = myJson.overview
         var temporadas= document.querySelector ('.temporadas');
         temporadas.innerText = "Temporadas: " + myJson.number_of_seasons
         var calificacion= document.querySelector ('.calificacion');
         calificacion.innerText = "Calificacion: " + myJson.vote_average
         var generos = document.querySelector ('.genero2');
         // console.log(myJson.genres)
         for (var i = 0; i < myJson.genres.length; i++) {
           var myGenre = myJson.genres[i]
           if(i == myJson.genres.length - 1){
              generos.innerHTML +=  myGenre.name + '.'
           }else{
             generos.innerHTML +=  myGenre.name + ', '
           }
         }





         //contenidoParaInsertar+= "<h1 class=color>" +  titulo + "</h1>"
         //contenidoParaInsertar+= "<h3 class=color> Idioma: " +  lenguaje + "</h3>"
         //contenidoParaInsertar+= "<h3 class='color anchitomedia'> Género/os: " +  h2 + "</h3>"
         //contenidoParaInsertar+= "<p class= color>" + sinopsis + "</p>"
         //contenidoParaInsertar+= "<h3 class= color> Temporadas: " +  temporadas + "</h3>"
         //contenidoParaInsertar+= "<h3 class= color> Episodios: " + episodios + "<h3/>"
         //contenidoParaInsertar+= <a class='estrellita' href='' uk-icon='icon:star;ratio:3'></a><img src="" class="foto">

    })

    fetch ("https://api.themoviedb.org/3/tv/" + idSerie + "/videos?api_key=0e65f11e4e58cb2a30446418b84e1eb4&language=en-US")
    .then (function (response){
      return response.json()
    })

    .then (function (objetoRespuesta){
      console.log (objetoRespuesta);
      var video = objetoRespuesta.results[0].key
      var elementoHTML= document.querySelector('div.trailer a')
      console.log(video);
      console.log(elementoHTML);
      elementoHTML.href += video
        // elementoHTML.href = elementoHTML.href + video


    })

    fetch ("https://api.themoviedb.org/3/tv/" + idSerie + "/recommendations?api_key=0e65f11e4e58cb2a30446418b84e1eb4&language=en-US&page=1")
    .then (function (response){
      return response.json()
    })

    .then (function (objetorecomendar){
      console.log(objetorecomendar.results);
      var contenedorRecomendaciones = document.querySelector('.fotosrecomendadas');
      for(var i = 0; i < objetorecomendar.results.length; i++) {
        contenedorRecomendaciones.innerHTML += "<li><a href='detalle.html?id=" + objetorecomendar.results[i].id + "'><img src='https://image.tmdb.org/t/p/original" + objetorecomendar.results[i].poster_path + "' width='150' alt=''></a></li>";
      }


    })




}



// tenemos que poner en el html todos los h1/h2 que queremos que aparezcan y para cambiarlos los capturamos por su clase con javascript (con un document.querySelector)

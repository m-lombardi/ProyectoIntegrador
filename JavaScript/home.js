window.onload = function(){
var numeroPagina = 1
var verMas = document.querySelector ('.ver')

var ulPopulares = document.querySelector('.populares')

  // function myFunction(x) {
  // if (x.matches) { // If media query matches
  //     if(ulPopulares.classList.contains('uk-child-width-1-6@m')){
  //       ulPopulares.classList.remove('uk-child-width-1-6@m')
  //       ulPopulares.classList.add('uk-child-width-1-3@m')
  //     }else{
  //       ulPopulares.classList.add('uk-child-width-1-6@m')
  //       ulPopulares.classList.remove('uk-child-width-1-3@m')
  //     }
  //   }
  // }

  // var x = window.matchMedia("(max-width: 700px)")
  // myFunction(x) // Call listener function at run time
  // x.addListener(myFunction) // Attach listener function on state changes


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
      // contenidoParaInsertar =

      contenidoParaInsertar = '<div class="uk-inline">'
      contenidoParaInsertar += '<a href="detalle.html?id='+myJson.results[i].id+'"><li>'
      contenidoParaInsertar += '<div class="uk-inline-clip uk-transition-toggle uk-light" tabindex="0">'
      contenidoParaInsertar += '<img src="'+ posterURL+ myJson.results[i].poster_path + '" alt="">'
      contenidoParaInsertar += '<div class="uk-position-center"><span class="uk-transition-fade icon" uk-icon="icon: plus; ratio: 2"><p class="masinfo">INFO</p></span></div></div>'
      contenidoParaInsertar += '<div class="uk-panel subtitulo1"><h2>'+ myJson.results[i].name + '</h2></div>'
      contenidoParaInsertar += '</li></a> </div>'
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

        // contenidoParaInsertar = '<div class="uk-inline">'
        // contenidoParaInsertar += '<a href="detalle.html?id='+myJson.results[i].id+'"><li>'
        // contenidoParaInsertar += '<div class="uk-inline-clip uk-transition-toggle uk-light" tabindex="0">'
        // contenidoParaInsertar += '<img src="'+ posterURL+ myJson.results[i].poster_path + '" alt="">'
        // contenidoParaInsertar += '<div class="uk-position-center"><span class="uk-transition-fade icon" uk-icon="icon: plus; ratio: 2"> <p class="masinfo">INFO</p></span></div></div>'
        // contenidoParaInsertar += '<div class="uk-panel subtitulo2"><h2>'+ myJson.results[i].name + '</h2></div>'
        // contenidoParaInsertar += '</li></a> </div>'

        contenidoParaInsertar = '<li >'
        contenidoParaInsertar += '<a href="detalle.html?id='+myJson.results[i].id+'">'
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

        contenidoParaInsertar = '<div class="uk-inline">'
        contenidoParaInsertar += '<a href="detalle.html?id='+myJson.results[i].id+'"><li>'
        contenidoParaInsertar += '<div class="uk-inline-clip uk-transition-toggle uk-light" tabindex="0">'
        contenidoParaInsertar += '<img src="'+ posterURL+ myJson.results[i].poster_path + '" alt="">'
        contenidoParaInsertar += '<div class="uk-position-center"><span class="uk-transition-fade icon" uk-icon="icon: plus; ratio: 2"> <p class="masinfo">INFO</p></span></div></div>'

        contenidoParaInsertar = '<li >'
        contenidoParaInsertar += '<a href="detalle.html?id='+myJson.results[i].id+'">'
        contenidoParaInsertar += '<img class="uk-height-small" src="'+ posterURL+ myJson.results[i].backdrop_path + '" alt="">'
        contenidoParaInsertar += '<div class="uk-panel subtitulo3"><h2>'+ myJson.results[i].name + '</h2></div>'
        contenidoParaInsertar += '</li></a> </div>'

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
          //console.log(myJson.genres[i].name)
          liAInsertar = '<li class="uk-active"><a href="generos.html'+ "?id="+ myJson.genres[i].id + "&" + "name="
          liAInsertar += myJson.genres[i].name + '">'
          liAInsertar +=  myJson.genres[i].name
          liAInsertar += '</a></li>'
          ulGenero.innerHTML += liAInsertar
          console.log (liAInsertar)
          }
})


  document.querySelector("form#busqueda").onsubmit = function (event) {

  if(document.querySelector("input.buscadorsecundario").value.length < 3) {
    event.preventDefault();
  document.querySelector('.error').innerHTML += `<div class="uk-alert-danger notificacion" uk-alert>
    <a class="uk-alert-close" uk-close></a>
    <p>Al menos 3 letras.</p>
</div>`
setTimeout(function(){
  document.querySelector('.notificacion').style.display = 'none'
}, 3000)
  }
  }

}

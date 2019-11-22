window.onload = function(){
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
fetch ("https://api.themoviedb.org/3/discover/tv?api_key=0e65f11e4e58cb2a30446418b84e1eb4&sort_by=popularity.desc&page=1&with_genres=" + idGenero)
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
      contenidoParaInsertar = '<div class="uk-inline">'
      contenidoParaInsertar += '<a href="detalle.html?id='+myJson.results[i].id+'"><li>'
      contenidoParaInsertar += '<div class="uk-inline-clip uk-transition-toggle uk-light" tabindex="0">'
      contenidoParaInsertar += '<img src="'+ posterURL+ myJson.results[i].poster_path + '" alt="">'
      contenidoParaInsertar += '<div class="uk-position-center"><span class="uk-transition-fade icon" uk-icon="icon: plus; ratio: 2"><p class="masinfo">INFO</p></span></div></div>'
      contenidoParaInsertar += '<div class="uk-panel subtituloGenero"><h2>'+ myJson.results[i].name + '</h2></div>'
      contenidoParaInsertar += '</li></a></div>'
      elementoHTML.innerHTML += contenidoParaInsertar
     }

  })


.catch(function(error) { console.log("Error: " + error);
 })

 var formulario= document.querySelector("#ingresar")
 var formulariousuario= document.querySelector("input.user")
 var formulariocontra= document.querySelector("input.contra")

 formulario.addEventListener('click',function (event){
   var usuarioIncorrecto = false
   var claveIncorrecta = false

   if (formulariousuario.value.length == 0 ) {

     usuarioIncorrecto= true
     document.querySelector('p.error-userName').innerText = "Por favor, ingresar al menos un caracter para tu nombre!"
   }

   if (formulariocontra.value.length < 3 ) {

     claveIncorrecta= true
     document.querySelector('p.error-userPassword').innerText= "Por favor, ingresar al menos 3 caracteres!"

   }

   if (usuarioIncorrecto || claveIncorrecta) {
     event.preventDefault();
   }
     else {
       window.location.href="home.html" ;
     //window.localStorage.setItem ("nombre", formulariousuario.value);
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
       contenidoParaInsertar = '<li> <a href="detalle.html?id='+myJson.results[i].id+'">'
       contenidoParaInsertar += '<img class="uk-height-small" src="'+ posterURL+ myJson.results[i].backdrop_path + '" alt="">'
       contenidoParaInsertar += '<div class="uk-panel subtitulo2 "><h2>'+ myJson.results[i].name + '</h2></div>'
       contenidoParaInsertar += '</a></li> '
       elementoHTML.innerHTML += contenidoParaInsertar
      }
    }
   })
   .catch(function(error){
     console.log(error);
   })





}

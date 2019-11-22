window.onload = function (){
  // var arrayDeGeneros = [
  //   {
  //     id: 10759,
  //     name: "Action & Adventure"
  //   },
  //   {
  //     id: 16,
  //     name: "Animation"
  //   },
  //   {
  //     id: 35,
  //     name: "Comedy"
  //   },
  //   {
  //     id: 80,
  //     name: "Crime"
  //   },
  //   {
  //     id: 99,
  //     name: "Documentary"
  //   },
  //   {
  //     id: 18,
  //     name: "Drama"
  //   },
  //   {
  //     id: 10751,
  //     name: "Family"
  //   },
  //   {
  //     id: 10762,
  //     name: "Kids"
  //   },
  //   {
  //     id: 9648,
  //     name: "Mystery"
  //   },
  //   {
  //     id: 10763,
  //     name: "News"
  //   },
  //   {
  //     id: 10764,
  //     name: "Reality"
  //   },
  //   {
  //     id: 10765,
  //     name: "Sci-Fi & Fantasy"
  //   },
  //   {
  //     id: 10766,
  //     name: "Soap"
  //   },
  //   {
  //     id: 10767,
  //     name: "Talk"
  //   },
  //   {
  //     id: 10768,
  //     name: "War & Politics"
  //   },
  //   {
  //     id: 37,
  //     name: "Western"
  //   }
  // ]

  var resultado;
  var resultado2;



  var query = new URLSearchParams(location.search)

  var ulGenero = document.querySelector('.miDropDown');
  // console.log(ulGenero);
  var opcGen = document.querySelector('.opcGen');
  // console.log(opcGen);
  var opcNoGen = document.querySelector('.opcNoGen');
  // console.log(opcNoGen);
  var sort = document.querySelector('.sort_by');
  // console.log(sort);
  var year = document.querySelector ('.year');
  // console.log(year);
  var liAInsertar = "";
  var opsAinsertar = "";
  var anioAinsertar = "";
  var generoElegido = query.get('with_genres') ;
  // console.log(generoElegido);
  var generoNoElegido = query.get('without_genres') ;
  // console.log(generoNoElegido);
  var ordenar = query.get('sort_by');
  // console.log(ordenar);
  var anioElegido = query.get('first_air_date_year');
  // console.log(anioElegido);


//   for (var i = 0; i < arrayDeGeneros.length; i++) {
//     if(arrayDeGeneros[i].name == generoElegido){
//       resultado = arrayDeGeneros[i];
//     }
//   }
// var idDeGeneroElegido = resultado.id;
// console.log(idDeGeneroElegido);
//
// for (var i = 0; i < arrayDeGeneros.length; i++) {
//   if(arrayDeGeneros[i].name == generoNoElegido){
//     resultado2 = arrayDeGeneros[i];
//   }
// }
// var idDeGeneroNoElegido = resultado2.id;

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
      opsAinsertar = '<option value='+myJson.genres[i].id+'>' + myJson.genres[i].name +' </option>'
      opcGen.innerHTML += opsAinsertar
      opcNoGen.innerHTML += opsAinsertar

      // console.log (liAInsertar)
      }
})

for (var i = 0; i < 50; i++) {
  anioAinsertar = '<option>' + (2019 - i) + '</option>'
  year.innerHTML += anioAinsertar
}

  fetch('https://api.themoviedb.org/3/discover/tv?api_key=0e65f11e4e58cb2a30446418b84e1eb4&sort_by='+ ordenar + '&first_air_date_year='+ anioElegido + '&with_genres=' + generoElegido + '&without_genres=' + generoNoElegido)


    .then(function(res) {
      return res.json()
    })
    .then(function(myJson){
      console.log(myJson.results)
      var contenidoAInsertar="";

      if (myJson.results.length == 0) {

        var resultado = document.querySelector ('.resultadosAvanzado');
        //resultado.innerText = "No se han encontrado resultados para su busqueda, intenta con otra! "
      }else {

      for (var i=0; i < myJson.results.length; i++){

      //myJson.results[i]
      // console.log ( myJson.results[i].name )
      // console.log (posterURL+myJson.results[i].poster_path)
      var elementos = document.querySelector ('.seriestodas');
      var posterURL= 'https://image.tmdb.org/t/p/original';

      contenidoAInsertar = '<div class="uk-inline">'
      contenidoAInsertar +='<li class= "resultseries"><a href="detalle.html?id=' + myJson.results[i].id +'">'
      contenidoAInsertar += '<div class="uk-inline-clip uk-transition-toggle uk-light" tabindex="0">'
      contenidoAInsertar += '<img class="uk-height-small" src="' + posterURL + myJson.results [i].backdrop_path + '" alt="">'
      contenidoAInsertar += '<div class="uk-position-center"><span class="uk-transition-fade icon" uk-icon="icon: plus; ratio: 2"><p class="masinfo">INFO</p></span></div></div>'
      contenidoAInsertar += '<div class="uk-panel subtitulo> <h2>' + myJson.results [i].name + '</h2></div>'
      contenidoAInsertar += '</a></li></div>'
      elementos.innerHTML += contenidoAInsertar

      // contenidoAInsertar = '<div class="uk-animation-toggle serie-buscador" tabindex="0">'
      // contenidoAInsertar += '<a href="detalle.html?idSerie=`+ idSerie + `">'
      // contenidoAInsertar += '<div class="uk-card uk-card-default uk-card-body uk-animation-slide-top-small serie-info">'
      // contenidoAInsertar += '<div class="serie-imagen"> <img src="https://image.tmdb.org/t/p/original"'+ posterURL + '>'
      // contenidoAInsertar += '</div></div></a></div>'
      // elementos.innerHTML = contenidoAInsertar

      // contenidoParaInsertar = '<li> <a href="detalle.html?id='+myJson.results[i].id+'">'
      // contenidoParaInsertar += '<img class="uk-height-small" src="'+ posterURL+ myJson.results[i].backdrop_path + '" alt="">'
      // contenidoParaInsertar += '<div class="uk-panel subtitulo2 "><h2>'+ myJson.results[i].name + '</h2></div>'
      // contenidoParaInsertar += '</a></li> '
      // elementoHTML.innerHTML += contenidoParaInsertar
      }
      }


    })
    .catch(function(error){
      console.log(error);
    })

    var btm= document.querySelector("#ingresar")
    var generodeseado= document.querySelector("generodeseado")
    var generonodeseado= document.querySelector("generonodeseado")
    var sortclass= document.querySelector("sortclass")

    // formulario.addEventListener('click',function (event){
    //   var generodeseadoIncorrecto = false
    //   var claveIncorrecta = false
    //
    //   if (formulariousuario.value.length == 0 ) {
    //
    //     usuarioIncorrecto= true
    //     document.querySelector('p.error-userName').innerText = "Por favor, ingresar al menos un caracter para tu nombre!"
    //   }
    //
    //   if (formulariocontra.value.length < 3 ) {
    //
    //     claveIncorrecta= true
    //     document.querySelector('p.error-userPassword').innerText= "Por favor, ingresar al menos 3 caracteres!"
    //
    //   }
    //
    //   if (usuarioIncorrecto || claveIncorrecta) {
    //     event.preventDefault();
    //   }
    //     else {
    //       window.location.href="home.html" ;
    //     //window.localStorage.setItem ("nombre", formulariousuario.value);
    //   }
  //  })






}




// aca tenemos que hacer lo mismo que con el buscador simple pero el fetch va a tener muchos puntos distintos, no uno como el otro, entonces vamos a declarar muchas variables y completamos el html que va a tener el formulario con las cosas que queremos que pueda buscar el usuario

//var url = 'https://api.themoviedb.org/3/tv/popular?api_key=0e65f11e4e58cb2a30446418b84e1eb4&language=en-US&page=1'

fetch("https://api.themoviedb.org/3/tv/popular?api_key=0e65f11e4e58cb2a30446418b84e1eb4&language=en-US&page=1")
.then(function(response){
  return response.json();
  console.log(response);
})
.then(function(information){
  console.log(information);
  var arrayDeSeries = datos.results
  console.log (datos.results);

  for (var i = 0; i < arrayDeSeries.length; i++) {

    var titulo= arrayDeSeries[i].title
    var imagen= arrayDeSeries[i].poster_path
    var id= arrayDeSeries[i].id
    elementoHTML = "<div class='uk-position-relative uk-visible-toggle uk-light'>"
    elementoHTML += "</div>"
  document.querySelector(".populares").innerHTML+= "<li> <a href= detalle.html?idserie="+ id + "><figure class=imghvr-zoom-out-down style=background-color:black;><img src= " + url + imagen + ">" + "<figcaption class=masinfo style=background-color:black;> MÁS INFORMACIÓN </figcaption></figure>" + elementoHTML + "</a></li>"

  }

  })

  .catch(function(error) { console.log("Error: " + error);


})

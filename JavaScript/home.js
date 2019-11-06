/*var queryString = location.search;
var searchParams = new URLSearchParams (queryString);
var search = searchParams.get ("search")
*/
var url = 'https://api.themoviedb.org/3/tv/popular?api_key=0e65f11e4e58cb2a30446418b84e1eb4&language=en-US&page=1'

fetch(url)
.then(function(response){
  return response.json();
  console.log(response);
})

.then(function(information){
  /* console.log(information) */;
  var arrayDeSeries = information.results
  console.log (information.results);

  for (var i = 0; i < arrayDeSeries.length; i++) {
    var url = ""
    var titulo= arrayDeSeries[i].title
    var imagen= arrayDeSeries[i].poster_path
    var id= arrayDeSeries[i].id
    elementoHTML += "<div class='uk-position-relative uk-visible-toggle uk-light'>"
    elementoHTML += "</div>"

  }

  })

  .catch(function(error) { console.log("Error: " + error);


})

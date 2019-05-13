$(document).ready(function () {
    var httpRequestMovies = new XMLHttpRequest();
    httpRequestMovies.open("get",
        "https://api.themoviedb.org/3/movie/now_playing?page=3&language=en-US&api_key=ad5c12676ca827525a595b9f3614a4a5"
    );
    httpRequestMovies.send();


    $("button.startOrder").click(function () {
        var maxRocket = JSON.parse(httpRequestMovies.responseText);
        var maxFive = maxRocket.count;
        var amntOfMovie = 4;

        for (var i = 0; i < amntOfMovie; i++) {
            var moviesObj = JSON.parse(httpRequestMovies.responseText);
            if (httpRequestMovies.readyState == 4 && httpRequestMovies.status == 200) {
                document.getElementById('row').innerHTML +=
                    "<card source=\"http://image.tmdb.org/t/p/w185/" + moviesObj.results[i].poster_path + "\" text=\"" + moviesObj.results[i].overview + "\" title=\"" + moviesObj.results[i].title + "\"></card>"
                document.getElementById('tableSection').innerHTML +=    
                    "<movietable title=\"" + moviesObj.results[i].title + "\" price=\"9.99\"  prop-mid=\"" +moviesObj.results[i].id +"\"></movietable>"

                someVue();

            }
            someVue();

        }


    });

});
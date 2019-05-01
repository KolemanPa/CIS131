$(document).ready(function () {


    console.log("line 2");
    var httpRequestMovies = new XMLHttpRequest();
    httpRequestMovies.open("get", "https://api.themoviedb.org/3/movie/now_playing?page=3&language=en-US&api_key=ad5c12676ca827525a595b9f3614a4a5");
    httpRequestMovies.send();


    $("button.startOrder").click(function () {
        var maxRocket = JSON.parse(httpRequestMovies.responseText);
        var maxFive = maxRocket.count;
        console.log(httpRequestMovies.readyState);
        for (var i = 0; i < 4; i++) {
            console.log(httpRequestMovies.readyState);
            var moviesObj = JSON.parse(httpRequestMovies.responseText);
            if (httpRequestMovies.readyState == 4 && httpRequestMovies.status == 200) {
                document.getElementById('app').innerHTML = `<card source="http://image.tmdb.org/t/p/w185/${moviesObj.results[i].poster_path}" text="${moviesObj.results[i].overview}"></card>`
            }
        }
    });
});



function clearPage(){
    document.getElementById('beginForm').innerHTML = "";
}
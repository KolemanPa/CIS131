

var httpRequest = new XMLHttpRequest();
httpRequest.open("get", "https://launchlibrary.net/1.4/launch/next/5");
httpRequest.send();

httpRequest.onreadystatechange = rockets;




var i =0;
function rockets(){

    var maxRocket = JSON.parse(httpRequest.responseText);
    var max = maxRocket.count;
    console.log(max);
    for(var i = 0; i<max; i++){
    if(httpRequest.readyState == 4 && httpRequest.status == 200){
        var rocketObj = JSON.parse(httpRequest.responseText);
        document.getElementById(`rocket${i}name`).innerHTML = rocketObj.launches[i].rocket.name;
        document.getElementById(`rocket${i}Info`).innerHTML = rocketObj.launches[i].windowstart;
    };
    };
};
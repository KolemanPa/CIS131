

var httpRequest = new XMLHttpRequest();
httpRequest.open("get", "https://launchlibrary.net/1.4/launch/next/5");
httpRequest.send();

httpRequest.onreadystatechange = rockets;



function rockets(){
    if(httpRequest.readyState == 4 && httpRequest.status == 200){
        // for(var i =0; i>4;i++){
        var rocketObj = JSON.parse(httpRequest.responseText);
        console.log(rocketObj);
        document.getElementById(`rocket1`).innerHTML = rocketObj.launches[0].name;
    };
    };
// };
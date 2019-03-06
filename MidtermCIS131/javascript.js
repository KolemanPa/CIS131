

var answers = ["lion king", "moana", "the rundown", "mulan", "All Of The Above"]

var quest = "YOUR FAVORITE MOVIE?";

// document.getElementById("myBtn").addEventListener("click", function(){
//     document.getElementById("demo").innerHTML = "Hello World";
//   });


var i;
var options;
function question(){
    console.log("HELLO");
    options = document.getElementById('queststuff');
         for(i = 0; i < answers.length; i++){
              options.innerHTML += `<ul>${answers[i]}</ul>`;
    };
};


var sends = document.getElementById('sendQUESTIONS');
if(sends){
    sends.addEventListener('click', ()=>{
        question();
    });
}


window.addEventListener("load", ()=>{
    addItems();
});
var stuff;
var j;


function addItems(){
    console.log("HEY");
stuff = document.getElementById('optionsStuff');
    for(j = 0; j < answers.length;j++){
        stuff.innerHTML += `<option> ${answers[j]} </option>`;
    }
}




var submit = document.getElementById('submitBtn');
    submit.addEventListener('click', ()=>{
        if(stuff == 'All Of The Above'){
            console.log("YES");
        }
    })


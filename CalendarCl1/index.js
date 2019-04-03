
var moment = require("moment");

require("moment");


var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];


// var i = 0;

var days = 0;

var seperator = ("-----------------------------------------------------------");

calander();
function calander(){
    for (var i = 0; i < month.length; i++){
        console.log();
        console.log();
        console.log(month[i]);
        console.log();
        console.log(seperator);
        days = 0;
        for(let j = 0; j < 7; j++){
            console.log(" Sun  |  Mon   |  Tue   |  Wed   |  Thu   |  Fri   |  Sat");
            console.log(` ${days++}      ${days++}       ${days++}       ${days++}       ${days++}       ${days++}       ${days++}`);
            console.log(seperator);
        }
    }
};


function printDays(){
        var sun = month[0];
        var mon = month[2];
        var tue = month[3];
        var wed = month[4];
        var thu = month[5];
        var fri = month[6];
        var sat = month[7];
        return ``
};
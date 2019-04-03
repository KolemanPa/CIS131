var moment = require('moment');
moment().format();


const startWeek = moment().startOf('month').week();
const endWeek = moment().endOf('month').week();

let calendar = []
for(var week = startWeek; week<endWeek;week++){
  calendar.push({
    week:week,
    days:Array(7).fill(0).map((n, i) => moment().week(week).startOf('week').clone().add(n + i, 'day'))
  })
}

console.log(calendar);




var calen = [];
function printCalander(){
for(var week = startWeek; week<endWeek;week++){
    calen.push({
      
  })
}

}
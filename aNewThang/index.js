// console.log(forLoop(15));
// function forLoop(num){
// for(let i = 0; i < num; i++){
//     console.log(`${i} x ${num} = ${i*num}`)
// }
// }


// USING chalk
const chalk = require('chalk');
 
console.log(chalk.red('Hello world!'));


 // USING uniq
var arr = [1, 1, 2, 2, 3, 5, 0, .5, 'HEY', 'HEY']
 
require("uniq")(arr)
console.log(chalk.yellow(arr));
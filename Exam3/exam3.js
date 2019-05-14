const jsonfile = require('jsonfile')
const fs = require("fs"); 

const file = 'data.json'

const content = fs.readFileSync(file);
const obj = JSON.parse(content);
const length = obj.items.length;

jsonfile.readFile(file, function (err, obj) { 
  if (err) console.error(err)
  console.log(`
  This is the JSON file, it seperates name, last name, and age!
fName\t\tlName\t\tAge
------------------------------------`)
for(var i = 0; i < length; i++){
  try{
    var fName = obj.items[i].fname;
    var lName = obj.items[i].lname;
    var age = obj.items[i].age;
    console.log(`${fName}\t\t${lName}\t\t${age}`)
  }


  catch{
    console.log("error")
  }
}

})

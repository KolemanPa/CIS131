var http = require('http');

var url = require('url');


var fs = require('fs')

http.createServer(function (req, res) {
    // res.writeHeader('307',{
    //     "Location" : "http://www.w3schools.com"
    // })
    // res.end("worked")


    var pathname = url.parse(req.url).pathname;
    console.log(pathname);

    // if (pathname === "/") {
    //     res.writeHeader('200', {
    //         "content-type": "text/plain"
    //     })
    //     res.end("index.html")
    // } else if (pathname === "/about.html") {
    //     res.writeHeader('200', {
    //         "content-type": "text/plain"
    //     })
    //     res.end("about.html")
    // } else {
    //     res.writeHeader('404', {
    //         "content-type": "text/plain"
    //     })
    //     res.end("file not found");
    // }


    // res.writeHeader('200', {
    //     "content-type" : "text/plain"
    // })
    // res.end("Hello Worldddd");

// USE THIS TO GET RID OF .HTML
    var theFile;
    switch(pathname){
        case '/about':
        case '/about.html':
            theFile = 'about.html';
            break;
        default:
            theFile = 'index.html';
    }

// USE THIS TO GET RID OF .HTML
    fs.readFile(theFile, function(err,data){

    // fs.readFile('index.html',function(err,data){
        res.writeHead('200',{
            "content-type" : "text/html"
        })
        res.end(data);
    })
}).listen(3000);

console.log("Server is running");
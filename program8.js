var http = require('http');
var url = process.argv[2];
var bl = require('bl');
http.get(url , function(response){
    //response.setEncoding('utf8');
  response.pipe(bl(function (err, data) {
    console.log(data.length);
    console.log(data.toString())

  }))
})

/*http.get(url , function(response){
  response.setEncoding('utf8');
  response.on('data' , function(data){
    console.log(data);
  });
});*/

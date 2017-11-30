var http = require('http');
var fs = require('fs');
var server = http.createServer(function callback(request , response){
var src = fs.createReadStream(process.argv[3]);
//console.log(src);
//console.log('2 ->' + src.pipe(response));
src.pipe(response);

})
server.listen(process.argv[2]);

/*  ------------Official solution ----------
var http = require('http')
   var fs = require('fs')

   var server = http.createServer(function (req, res) {
     res.writeHead(200, { 'content-type': 'text/plain' })

     fs.createReadStream(process.argv[3]).pipe(res)
   })

   server.listen(Number(process.argv[2]))

*/

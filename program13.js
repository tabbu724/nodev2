var http =require('http');
var url = require('url');
var server = http.createServer(function callback (req , res){
  if(req.method == 'GET'){
  var parsedUrl = url.parse(req.url ,true);
  var path = parsedUrl.path;
  var date = new Date(parsedUrl.query.iso);
  var result;
  if(path.indexOf('parsetime') >= 0){
    result = {
      hour : date.getHours(),
      minute : date.getMinutes(),
      second : date.getSeconds()
    }
    res.end(JSON.stringify(result));
  }
  if(path.indexOf('unixtime') >= 0){
    result = {
      unixtime : date.getTime()
    }
    res.end(JSON.stringify(result));
  }
  }
});
server.listen(process.argv[2]);

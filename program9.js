var http = require('http');
var urls = [process.argv[2] ,process.argv[3],process.argv[4] ];
var count = 0;
var arr = [];
function httpget(url , iterate){
  http.get(url , function (response) {
    var str = '';
    response.setEncoding('utf8');
    response.on('data' , function (data){
      str = str+data;
    });
    response.on('end' , function(){
      arr[iterate]=str;
if(count == 2){
  ordered_output();
}
else {
  count++;
}
    });
  })
}
for(var i=0 ; i< urls.length ; i++){
  httpget(urls[i] , i);
}
function ordered_output(){
  for(var j=0 ; j<arr.length ;j++){
    console.log(arr[j]);
  }
}

/*Official solution
var http = require('http')
   var bl = require('bl')
   var results = []
   var count = 0

   function printResults () {
     for (var i = 0; i < 3; i++) {
       console.log(results[i])
     }
   }

   function httpGet (index) {
     http.get(process.argv[2 + index], function (response) {
       response.pipe(bl(function (err, data) {
         if (err) {
           return console.error(err)
         }

         results[index] = data.toString()
         count++

         if (count === 3) {
           printResults()
         }
       }))
     })
   }

   for (var i = 0; i < 3; i++) {
     httpGet(i)
   }

*/

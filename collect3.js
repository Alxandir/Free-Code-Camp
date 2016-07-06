var http = require('http');
var bl = require('bl');

http.get(process.argv[2],function callback(response){
   response.pipe(bl(function (err, data) {
       if(err){
          console.log(err);
       } else {
          console.log(data.toString());
          http.get(process.argv[3],function callback(response){
            response.pipe(bl(function (err, data) {
               if(err){
                  console.log(err);
               } else {
                  console.log(data.toString());
                  http.get(process.argv[4],function callback(response){
            response.pipe(bl(function (err, data) {
               if(err){
                  console.log(err);
               } else {
                  console.log(data.toString());
                  
               }
            })); 
         });
               }
            })); 
         });
      }
   })); 
});
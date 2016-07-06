var fs = require('fs');
var pathFinder = require('path');

module.exports = function (path, ext, callback) {
    
    var extension = '.' + ext;
   fs.readdir(path, function (error, data){
       if(error){
           callback(error,null);
       } else {
           var files = [];
           data.forEach(function(file){
               if(pathFinder.extname(file) == extension){
                files.push(file);
                }
           });
        callback(null, files);
       }
   });
}
var fs = require('fs');
var path = require('path');
var files = [];
var extension = '.' + process.argv[3];
fs.readdir(process.argv[2], function callback(error, data){
    for(var i = 0; i < data.length; i++){
        if(path.extname(data[i]) == extension){
            console.log(data[i]);
        }
    }
});
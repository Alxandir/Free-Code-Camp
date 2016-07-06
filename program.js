var fs = require('fs');
fs.readFile(process.argv[2], function callback(error, data){
    var string = data.toString();
    var stringArr = string.split("\n");
    console.log(stringArr.length-1);
});
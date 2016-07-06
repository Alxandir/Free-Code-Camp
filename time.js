var net = require("net");
var time = require("strftime");

var server = net.createServer(function listener(socket){
    var data = time('%F %H:%M') + "\n";
    socket.end(data);
});
server.listen(process.argv[2]);
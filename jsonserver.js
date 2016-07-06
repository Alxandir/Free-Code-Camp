var http = require("http");
var url = require("url");


var server = http.createServer(function (request, response){
    if(request.method == 'GET'){
        var parsedURL = url.parse(request.url, true);
        var result = parsedURL.query.iso.match(/\d+/g);
        response.writeHead(200, { 'Content-Type': 'application/json' });
        if(parsedURL.pathname == '/api/parsetime'){
            var json = {
                hour : Number(result[3]),
                minute : Number(result[4]),
                second : Number(result[5])
            };
            response.end(JSON.stringify(json));
        } else if (parsedURL.pathname == '/api/unixtime'){
            var date = new Date(parsedURL.query.iso);
            var json = {
                unixtime : date.getTime()
            }
            response.end(JSON.stringify(json));
        }
    }
});
server.listen(process.argv[2]);
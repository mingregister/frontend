// https://www.cnblogs.com/yc-755909659/p/5928054.html
var http = require('http');
var querystring = require('querystring');

function writeResponse(res,data){
    var total = 0;
    console.log('writeResponse start')
    for(fruit in data){
        total += Number(data[fruit]);
    }
    res.writeHead(200,"OK",{
        "Content-Type":"text/html",
        // 这里的端口要用38082(浏览器访问的端口)才能访问到，否则总数会不更新
        // "Access-Control-Allow-Origin":"http://mystatic.com:38088"
        "Access-Control-Allow-Origin":"http://mystatic.com:38082"
    });
    res.write('<html><head><title>Fruit Total</title></head><body>');
    res.write('<p>'+ total + ' item ordered</p></body></html>');
    res.end();
    console.log('writeResponse end')
}

http.createServer(function(req,res){
    console.log("[200] " + req.method + " to " + req.url);
    if(req.method == "OPTIONS"){
        res.writeHead(200,"OK",{
            "Access-Control-Allow-Headers":"Content-Type",
            "Access-Control-Allow-Methods":"*",
            "Access-Control-Allow-Origin":"*"
        });
        res.end();
    }else if(req.url == '/form'&& req.method == 'POST'){
        var dataObj = new Object();
        var contentType = req.headers["content-type"];
        var fullBody = '';
        
        if(contentType){
            if(contentType.indexOf("application/x-www-form-urlencoded") > -1){
                req.on('data',function(chunk){
                    fullBody += chunk.toString();
                });
                req.on('end',function(){
                    var dBody = querystring.parse(fullBody);
                    dataObj.apples = dBody["apples"];
                    dataObj.bananas = dBody["bananas"];
                    // 因为是区分大小写的，所以如果这里写成 "Cherries"
                    // 那么，就会导致获取不到cherries的数量，
                    // 从而，dataObj就变成了NaN
                    // 所以，页面统计数量也会变成：NaN item odered 
                    dataObj.cherries = dBody["cherries"];
                    console.log('ni si na li de response?')
                    writeResponse(res,dataObj);
                });
            }else if(contentType.indexOf("application/json") > -1){
                req.on('data',function(chunk){
                    fullBody += chunk.toString();
                });
                req.on('end',function(){
                    dataObj = JSON.parse(fullBody);
                    writeResponse(res,dataObj);
                });
            }
        }
    }
}).listen(38088);

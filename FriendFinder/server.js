const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 8085;


app.use(express.static("./app/public"));

// 'use strict';
 
// var rootCas = require('ssl-root-cas/latest').create();
 
// // rootCas
// //   .addFile(__dirname + '/ssl/01-cheap-ssl-intermediary-a.pem')
// //   .addFile(__dirname + '/ssl/02-cheap-ssl-intermediary-b.pem')
// //   ;
//   require('https').globalAgent.options.ca = rootCas;
// const server = http.createServer(handleRequest);
    
// function handleRequest(req, res)    {
//     var path = req.url;

//     switch (path)   {
//     case    
//     }

// }

// req.on("end", function()    {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end
//     )}
// }

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function()  {
    console.log("Server listening on: http://localhost" + PORT);
});

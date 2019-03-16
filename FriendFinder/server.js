const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 8085;

const server = http.createServer(handleRequest);
    
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

server.listen(PORT, function()  {
    console.log("Server listening on: http://localhost" + PORT);
});

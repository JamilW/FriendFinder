const express = require("express");

const app = express();

const PORT = process.env.PORT || 8085;

app.use(express.static("./app/public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function()  {
    console.log("Server listening on: http://localhost" + PORT);
});

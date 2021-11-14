const express = require("express");
const app = express();

app.use(express.static(__dirname + "/styles"));
 
// обработка запроса к корню веб-сайта
app.get("/", function(request, response){
     
    response.send("styles/index.html");
});

app.get("/flex", function(request, response){
     
  response.send("styles/indexFlex.html");
});

app.get("/grid", function(request, response){
     
  response.send("styles/indexGrid.html");
});

app.listen(process.env.PORT || 3000);
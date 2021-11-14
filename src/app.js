const fs = require('fs');
const path = require('path');
const express = require("express");
const app = express();

app.use(express.static(__dirname + "/styles"));
// обработка запроса к корню веб-сайта
app.get("/", function(request, response){
    response.send("styles/index.html");
});

app.get('/flex', function(req, res) {
    res.sendFile(path.join(__dirname, 'styles/indexFlex.html'));
});


app.get('/grid', function(req, res){
    res.sendFile(path.join(__dirname, 'styles/indexGrid.html'));
});

app.listen(process.env.PORT || 3000);

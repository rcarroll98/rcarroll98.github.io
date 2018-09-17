// Dependencies
var express = require("express");
var mysql = require("mysql");

// Dependencies
var express = require("express");
var mysql = require("mysql");

var PORT = process.env.PORT || 3306;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "movieplannerdb"
});



connection.connect(function(err) {
if (err) {
    console.error("error connecting: " + err.stack);
    return;
}
console.log("connected as id " + connection.threadId);
});

app.get("/", function(){
    connection.query("SELECT * FROM movies order by id", function(err, result){
        if (err) {
            return res.status(500).end();
          }

          res.render("index", { movies: data });
    })
});

app.put("/movies", function(){

});

app.post("/movies", function(){

});

app.delete("/movies", function(){

});






app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
var connection = require("./connection.js");


// turns values into question marks so mySQL can
// understand it
function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
}



function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
}



var orm = {
    selectAll: function(whatToSelect, table){
        var queryString = "SELECT ?? FROM ??"
        connection.query(queryString, [whatToSelect, table], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: function(tableInput){
        var queryString = "INSERT INTO ?? SET *"
        connection.query(queryString, [tableInput])
    },
    updateOne: function(table, whatToUpdate, idOfCol){
        var queryString = "UPDATE ?? SET ?? WHERE ? = *"
        connection.query(queryString, [table, whatToUpdate, idOfCol ], function(err, result){
            if (err) throw err;
            console.log(result);
        })
    }
}

module.exports = orm;
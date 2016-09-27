var customer = require("./customer");

module.exports = function(app){
   app.get("/", function( req , res, next){
     res.send("Hello rest");
   });

  // customer routes
  customer(app); 
}
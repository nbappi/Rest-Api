module.exports = function(app){
   app.get("/customer", function(req, res){
      res.send("customer html.");
   });
}
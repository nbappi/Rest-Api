module.exports = function(app){

   //Customer routing
    var cc = require("../controllers/customer");
    app.get("/customer", cc.find);
    app.get("/customer/:id", cc.findById);
    app.post("/customer", cc.add);
    app.put("/customer/:id", cc.update);
    app.delete("/customer/:id", cc.delete);
}
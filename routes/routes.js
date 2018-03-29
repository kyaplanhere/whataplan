var config = require("../config.json")

console.log(config);

var appRouter = function (app) {
    app.get("/", function(req, res){
      res.status(200).send("Welcome to our whataplan restful API");
    });
}

module.exports = appRouter;
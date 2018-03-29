var config = require("../config.json")
var googleMapsClient = require('@google/maps').createClient({
    key: config.API_KEY
});

console.log(config);

var appRouter = function (app) {
    app.get("/", function(req, res){
      res.status(200).send("Welcome to our whataplan restful API");
    });
}

module.exports = appRouter;
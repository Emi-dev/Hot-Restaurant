const tableData = require("../data/tableData.js");
const WaitinglistData = require("../data/WaitinglistData.js");

module.exports = function(app) {
    app.get("/data/tableData", function(req, res) {
        return res.json(tableData);
    });

    app.get("/data/WaitinglistData", function(req, res) {
        return res.json(WaitinglistData);
    })

    app.post("/data/tableData", function(req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body parsing middleware
        const newCustomer = req.body;
             
        console.log(newCustomer);
      
        tableData.push(newCustomer);
      
        res.json(newCustomer);
    });

    app.post("/data/WaitinglistData", function(req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body parsing middleware
        const newCustomer = req.body;
             
        console.log(newCustomer);
      
        WaitinglistData.push(newCustomer);
      
        res.json(newCustomer);
    });
}
const fs = require('fs')
var agentData = fs.readFileSync("./data/agents.json");
var customerData = fs.readFileSync("./data/customers.json")

var customers = JSON.parse(customerData)
var agents = JSON.parse(agentData)

module.exports.customers =  customers
module.exports.agents =  agents


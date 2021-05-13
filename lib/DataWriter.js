const fs = require('fs')

writeAgents = (agents) => {
    fs.writeFile("./data/agents.json", JSON.stringify(agents), (err) => {
        if (err) console.log('Error with Write to Data File agents.json', err)
    })
}

writeCustomers = (customers) => {
    fs.writeFile("./data/customers.json", JSON.stringify(customers), (err) => {
        if (err) console.log('Error with Writing to Data File customers.json', err)
    })
}

module.exports.agentWriter = writeAgents
module.exports.customerWriter = writeCustomers
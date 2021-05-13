let agents = require('../DataReader').agents
let dataWriter = require('../DataWriter')

module.exports = {
    update: updateAgent,
    insert: addAgent,
    select: getAgent
}
function getAgent (id) {
    return agents.filter(x => x._id == id)[0]
}
function swapAgents(id, newAgent){
    agents = agents.filter(x => x._id != id)
    addAgent(newAgent)
} 
function addAgent(agent){
    agents.push(agent)
    dataWriter.agentWriter(agents)
}
function updateAgent(id, newPropertyValues){
    var agentToUpdate = getAgent(id)
    if (agentToUpdate){
        for (const [key, value] of newPropertyValues.entries()){
            if (value){
                agentToUpdate[key] = value
            }
        }
        swapAgents(id, agentToUpdate)
    } else {
        return false
    }
    return true

}
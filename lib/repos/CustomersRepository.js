let customers = require('../DataReader').customers
let dataWriter = require('../DataWriter')


module.exports = {
    getCustomers: getCustomersByAgentId,
    updateCustomer: updateCustomer,
    addCustomer: addCustomer,
    deleteCustomer: deleteCustomer
}
function getCustomersByAgentId(id) {
    return customers.filter(x => x.agent_id == id)
}
function getCustomer(id){
    return customers.filter(x => x._id == id)[0]
}
function addCustomer(customer) {
    customers.push(customer)
    dataWriter.customerWriter(customers)
}
function deleteCustomer(id) {
    customers = customers.filter(x => x._id != id)
    dataWriter.customerWriter(customers)
}
function swapCustomers(id, newCustomer) {
    customers = customers.filter(x => x._id != id)
    addCustomer(newCustomer)
}
function updateCustomer(id, newPropertyValues){
    var customer = getCustomer(id)
    if (customer){
        for (const [key, value] of newPropertyValues.entries()){
            if (value){
                customer[key] = value
            }
        }
        swapCustomers(id, customer)
    } else { 
        return false
    }
    return true
}
var express = require('express')
var data = require('./lib/DataReader')
var agentRepo = require('./lib/repos/AgentsRepository')
var customerRepo = require('./lib/repos/CustomersRepository')
var app = express();

let customers = data.customers
let agents = data.agents

app.use(express.json())

app.get('/', function(req, res){
    res.send("Welcome to the Master Portal API")
})

// Get All Agents
app.get('/agents', (req, res) => {
    res.send(agents)
})

// Get Agent By Id
app.get('/agents/:id', (req, res) => {
    var id = req.params.id
    res.send(agents.filter(x => x._id == id))
})

// Add new Agent
app.post('/agents', (req, res) => {
    var agentPost = req.body
    agentRepo.insert(agentPost)
    res.sendStatus(200)
})

// Update Agent
app.put('/agents/:id', (req, res) => {
    var id = req.params.id
    var agentProps = new Map()
    agentProps.set('name', req.body.name)
    agentProps.set('address', req.body.address)
    agentProps.set('city', req.body.city)
    agentProps.set('zipcode', req.body.zipcode)
    agentProps.set('tier', req.body.tier)
    agentProps.set('phone', req.body.phone)
    var success = agentRepo.update(id, agentProps)
    res.send(success)
})

// Get Customers By a agent
app.get('/customers/:agentId', (req, res) => {
    res.send(customerRepo.getCustomers(req.params.agentId))
})

// Get All Customers
app.get('/customers', (req, res) => {
    res.send(customers)
})

// Add new Customer
app.post('/customers', (req, res) => {
    var customerToAdd = req.body
    customerRepo.addCustomer(customerToAdd)
    res.sendStatus(200)
})

// Update Customer
app.put('/customers/:id', (req, res) => {
    var id = req.params.id
    var customerProps = new Map()
    customerProps.set('agent_id', req.body.agent_id)
    customerProps.set('isActive', req.body.isActive)
    customerProps.set('balance', req.body.balance)
    customerProps.set('age', req.body.age)
    customerProps.set('eyeColor', req.body.eyeColor)
    customerProps.set('name', req.body.name)
    customerProps.set('company', req.body.company)
    customerProps.set('email', req.body.email)
    customerProps.set('phone', req.body.phone)
    customerProps.set('address', req.body.address)
    customerProps.set('registered', req.body.registered)
    customerProps.set('latitude', req.body.latitude)
    customerProps.set('longitude', req.body.longitude)
    customerProps.set('tags', req.body.tags)
    var success = customerRepo.updateCustomer(id, customerProps)
    res.send(success)
})

// Delete Customer
app.delete('/customers/:id', (req, res) => {
    var id = req.params.id
    customerRepo.deleteCustomer(id)
    res.sendStatus(200)
})

app.listen(8080, () => {
    console.log(`Running Agent and Customers App at http://localhost:${8080}`)
})
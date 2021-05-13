# The Master Portal API

# Getting started

To get up the server running locally
- Have NodeJS and NPM installed
- Clone repo
- `npm install`
- `npm run start` to start the server explicatly through node on the port 8080
- `npm run dev` to start the server through the devDependency [nodemon](https://github.com/remy/nodemon)

## Applicaiton Structure 
- `server.js` - The entry point to the application. It defines the express server and route definitons for all the API endpoints
- `data/` - This folder contains the data files storing all the agent and customer data in json format
- `lib/` - This folder contains the necessary read and write logic dealing with the data files

### API - Endpoints
Running the 
- `GET /agents` - Returns List of all Agents
- `GET /agents/{id}` - Returns all Agent Details by agent ID
- `POST /agents` - Add new Agent: Request body in json format for Agent data
- `PUT /agents/{id}` - Update existing Agent: Request body in json format

- `GET /customers/{agentId}` - Get customers By a agent
- `GET /customers` - Get all customers
- `POST /customers` - Add new Customer
- `PUT /customer/{id}` - Update existing Customer
- `DELETE customer/{id}` - Delete existing Customer 

## Assumptions
- The callers to this API have already been authenticated and have some form of authorization token.
- All users of this API have access to the same data set of customers and agents.
- All data relating to Customers and Agents will live in there respective data files in the data directory.
- There will be an unqiue ID generated on the DB side during the Adding of new customer and agent.

## Questions to StakeHolders
- Is there a cap to how many customers an agent can have?
- Does pagination matter? (Might make sense to implement server side pagination on the list view endpoints.)
- Is Customer creation tied to an existing agent? Can they be created together in the same workflow?
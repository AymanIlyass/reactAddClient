const { buildSchema } = require("graphql");

const clientSchema = buildSchema(`
    type Query {
        clients: [Client]
    }

    type Mutation {
        addClient(nom: String!, prenom: String!, age: String!): Client
    }

    type Client {
        nom: String,
        prenom: String,
        age: String
    }

`)

module.exports = clientSchema;
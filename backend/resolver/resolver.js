const Client = require('../model/model');

const resolvers = {
    clients: () => {
        return Client.find({})
    },
    addClient: (args) => {
        let client = new Client({
            nom: args.name,
            prenom: args.genre,
            age: args.year
        })
        client.save()
        return client
    }
}

module.exports = resolvers;
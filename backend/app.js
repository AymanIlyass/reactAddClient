const express = require("express");
const clientSchema = require('./schema/schema')
const mongoose = require("mongoose");
const { graphqlHTTP } = require('express-graphql');
const resolvers = require('./resolver/resolver')

const app = express();

// Connect to MongoDB
db_url = "mongodb+srv://admin:admin@cluster0.bxtxq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(db_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Connected successfully to MongoDB"))
.catch( (error) => console.log("error - " + error) );


// Setting graphQL
app.use('/graphql', graphqlHTTP({
    schema: clientSchema,
    graphiql: true,
    rootValue: resolvers
}))

// Get method
app.get('/', (req, res) => {
    res.send("Hello from backend app.js");
});

app.listen(4000, () => {
    console.log("Server on port 4000");
});
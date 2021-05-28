const express = require('express');
const app = express();
const { ApolloServer } = require('apollo-server-express');

const typeDefs = null;
const resolvers = null;

const server = new ApolloServer({
    typeDefs,
    resolvers
});
server.applyMiddleware({app});

app.listen(3000,()=>{
    console.log('listen in port 3000');
});
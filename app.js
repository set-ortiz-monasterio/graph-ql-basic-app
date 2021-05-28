const express = require('express');
const app = express();
const { ApolloServer, gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        me: User
    }

    type User{
        name: String!
    }
`;
const resolvers = {
    Query:{
        me:()=>{
            return {
                name:'Susan'
            }
        }
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});
server.applyMiddleware({app});

app.listen(3000,()=>{
    console.log('listen in port 3000');
});
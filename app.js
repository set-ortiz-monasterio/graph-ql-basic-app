const express = require('express');
const app = express();
const { ApolloServer, gql } = require('apollo-server-express');
const data = require('./data');
const users = data.users;
const cars = data.cars;
const me = users[0];

const typeDefs = gql`
    type Query {
        users:[User]
        user(id:Int!):User
        me: User
        cars:[Car]
        car(id:Int!):Car
    }

    type User{
        id:Int!
        name: String!
    }

    type Car{
        id:Int!
        make:String!
        model:String!
        colour:String!
    }
`;
const resolvers = {
    Query: {
        users: () => users,
        user: (parent, args) => users.filter(u => u.id === args.id)[0],
        me: () => me,
        car: (parent, args) => cars.filter(c => c.id === args.id)[0],
        cars:()=>cars
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});
server.applyMiddleware({ app });

app.listen(3000, () => {
    console.log('listen in port 3000');
});
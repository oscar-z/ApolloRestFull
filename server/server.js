const express = require ('express');
const { ApolloServer } = require ('apollo-server-express');
const mongoose = require ('./config/database');
const typeDefinitions = require ('./modules/graphqlSchema');
const resolvers = require ('./modules/resolver');
const port = process.env.PORT || 3000;

const server = new ApolloServer({ typeDefs: typeDefinitions, resolvers });

const app = express();

server.applyMiddleware({ app });




app.listen ({ port }, () => {
    console.log(`Server Running on http://localhost:${port}${server.graphqlPath}`);  
})


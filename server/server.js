const express = require ('express');
const { ApolloServer } = require ('apollo-server-express');
const mongoose = require ('./config/database');
const typeDefinitions = require ('./modules/graphqlSchema');
const resolvers = require ('./modules/resolver');
const port = process.env.PORT || 3000;
const path = require('path');

const publicPath = path.join(__dirname, '..', 'dist');

const server = new ApolloServer({ typeDefs: typeDefinitions, resolvers });

const app = express();
app.use(express.static(publicPath));

server.applyMiddleware({ app });

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'))
})


app.listen ({ port }, () => {
    console.log(`Server Running on http://localhost:${port}${server.graphqlPath}`);  
})


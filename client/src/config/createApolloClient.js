import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
    uri: 'https://apollo-app-oscar-z.herokuapp.com/graphql'
});

export default client;
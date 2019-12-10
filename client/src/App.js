import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import apolloClient from './config/createApolloClient';
import { Post } from './modules/post'


class App extends Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
          <Post/>
      </ApolloProvider>
    )
  }
};


export default App;
import { Query } from 'react-apollo';
import React from 'react';
import { gql } from 'apollo-boost';


export const GET_POST = gql`
  {
    posts {
      _id
      title
      content
    }
  }
`;

const withPosts = Component => props => {
  return (
    <Query query={GET_POST}>
      {({ loading, data }) => {
        return (
          <Component postsLoading={loading} posts={data && data.posts} {...props} />
        );
      }}
    </Query>
  );
};

export default withPosts;
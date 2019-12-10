const { gql } = require('apollo-server-express')

const typeDefinitions = gql`
    type Post {
        _id: ID,
        title: String,
        content: String
    },
    type Query {
        posts: [Post]
    },
    type Mutation {
        addPost(title: String, content: String): Post,
        deletePost(postId: String!): Post,
    }
`

module.exports = typeDefinitions;
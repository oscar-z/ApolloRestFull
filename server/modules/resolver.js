const Post = require('./post/models/post.model')

const resolvers = {
    Query: {
        posts: () => Post.find({})
    },
    Mutation: {
        addPost: (parent, post) => {
            const newPost = new Post({ title: post.title, content: post.content});
            return newPost.save()
        },
        deletePost: (_ , postID) => {
            return Post.findByIdAndDelete(postID.id)
        }
    }
}

module.exports = resolvers
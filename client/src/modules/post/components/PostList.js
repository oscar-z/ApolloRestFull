import React, { Component } from 'react';
import { Card, CardTitle, CardBody, Button } from 'reactstrap';

export default class PostList extends Component {
    constructor(props) {
        super (props);
        this.showPost = this.showPost.bind(this);
    }

    deletePost() {

    }

    showPost() {
        const { posts, postsLoading } = this.props;

        if(postsLoading){
            return(
                <p>Cargando....</p>
            )
        }

        if (posts.length > 0) {
            return posts.map(post => {
                return (
                    <Card key={post._id} body outline className="post-card">
                        <CardTitle>{post.title}</CardTitle>
                        <CardBody>{post.content}</CardBody>
                        <Button onClick=""> Delete post</Button>
                    </Card>
                );
            })
        } else {
            return (
                <div>
                    <h2> No posts available ☹️ </h2>
                    <p>Create a new post in the form.</p>
                </div>
            )
        }
    }


    render() {
        return (
            <div className="post-container">
                {this.showPost()}
            </div>
        )
    }
}


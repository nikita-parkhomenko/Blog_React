import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import './Posts.css';
import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';

class Posts extends Component {

    state = {
        posts: []
    }


    componentDidMount() {
        axios
            .get('http://jsonplaceholder.typicode.com/posts/')
            .then( resp => {
                let posts = resp.data.slice(0, 4);
                posts = posts.map( post => {
                    return { ...post, author: 'Nikita' }
                });

                this.setState({ posts: posts })
            })
    };

    selectedPostHandler = (id) => {
        this.props.history.push('/' + id);
    }

    render() {
        let posts = <p> Something went wrong! </p>;

        if (this.state.posts.length) {
            posts = (
                this.state.posts.map( post => {
                    return <Post selected={() => this.selectedPostHandler(post.id)}
                        key={post.id} author={post.author} title={post.title} />
                })
            )
        }
        return(
            <React.Fragment>
                <section className="Posts">
                    {posts}
                </section>
                <Route path="/:id" exact component={FullPost} />
            </React.Fragment>
        )
    }
};

export default Posts;
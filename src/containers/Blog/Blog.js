import React, { Component } from 'react';
import axios from 'axios';

import './Blog.css';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';


class Blog extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
        axios
            .get('http://jsonplaceholder.typicode.com/posts')
            .then( response => {
                let posts = response.data.map( post => {
                    return {...post, author: 'Nikita'}
                });
                posts = posts.slice(0, 4);
                this.setState({ posts: posts })
            })
            .catch( error => console.log(error))
    }


    render() {
        let posts = <p> We dont have any Posts. </p>;
        if (this.state.posts) {
            posts = this.state.posts.map( post => {
                return <Post key={post.id} title={post.title} author={post.author} />
            })
        }

        return (
            <div className="Blog">
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        )
    }
};

export default Blog;
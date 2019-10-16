import React, { Component } from 'react';
import axios from 'axios';

import './Blog.css';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';


class Blog extends Component {

    state = {
        posts: [],
        selectedPost: null
    }

    componentDidMount() {
        axios
            .get('http://jsonplaceholder.typicode.com/posts')
            .then( response => {
                let posts = response.data.slice(0, 4);
                posts = posts.map( post => {
                    return {...post, author: 'Nikita'}
                });
                this.setState({ posts: posts })
            })
            .catch( error => console.log(error))
    }

    selectedPostHandler = (id) => {
        this.setState({selectedPost: id})
        console.log(id)
    }


    render() {
        let posts = <p> We dont have any Posts. </p>;
        if (this.state.posts) {
            posts = this.state.posts.map( post => {
                return <Post selected={ () => this.selectedPostHandler(post.id)}
                 key={post.id} title={post.title} author={post.author} />
            })
        }

        return (
            <div className="Blog">
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPost} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        )
    }
};

export default Blog;
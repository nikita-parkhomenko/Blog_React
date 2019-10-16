import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    state = {
        fullPost: null
    }

    componentDidUpdate() {
        console.log('update')
        if (this.props.id) {
            if (!this.state.fullPost || (this.state.fullPost && this.state.fullPost.id !== this.props.id)) {
                axios
                    .get('http://jsonplaceholder.typicode.com/posts/' + this.props.id)
                    .then( response => {
                        this.setState({ fullPost: response.data })
                        console.log(response)
                    })
            }
        }
    }
    render() {
        let post = <p>Dont have a post</p>
        if (this.props.id) {
            post = <p>Loading...</p>;
        }
        
        if (this.state.fullPost) {
            post = (
            <div className="FullPost">
                <h1> {this.state.fullPost.title} </h1>
                <p> {this.state.fullPost.content} </p>
                <div className="Edit">
                    <button className="Delete">Delete</button>
                </div>
            </div>
            );
        }

        return post;
    }
};

export default FullPost;
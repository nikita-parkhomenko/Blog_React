import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    state = {
        fullPost: null
    }

    componentDidMount() {
        console.log('mount');
        this.loadData();
    };

    componentDidUpdate() {
        console.log('update');
        this.loadData();
    }

    loadData = () => {
        if (this.props.match.params.id) {
            if (!this.state.fullPost || (this.state.fullPost && this.state.fullPost.id !== +this.props.match.params.id)) {
                axios
                    .get('http://jsonplaceholder.typicode.com/posts/' + this.props.match.params.id)
                    .then( response => {
                        this.setState({ fullPost: response.data })
                        console.log(response)
                    })
            }
        }
    }
    render() {
        let post = <p>Please select a Post</p>
        if (this.props.match.params.id) {
            post = <p>Loading...</p>;
        }
        
        if (this.state.fullPost) {
            post = (
            <div className="FullPost">
                <h1> {this.state.fullPost.title} </h1>
                <p> {this.state.fullPost.body} </p>
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
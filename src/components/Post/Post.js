import React, { Component } from 'react';

import './Post.css';

class Post extends Component {
    render() {
        return (
            <article className="Post">
                <h1 className="Info"> {this.props.title} </h1>
                <div>
                    <div className="Title"> {this.props.author} </div>
                </div>
            </article>
        )
    }
};

export default Post;
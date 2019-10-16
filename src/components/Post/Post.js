import React, { Component } from 'react';

import './Post.css';

class Post extends Component {
    render() {
        return (
            <article className="Post">
                <h1 className="Info">Title</h1>
                <div>
                    <div className="Title">Author</div>
                </div>
            </article>
        )
    }
};

export default Post;
import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import './NewPost.css';

class NewPost extends Component {

    state = {
        title: '',
        content: '',
        author: 'Nikita',
        redirect: false
    }

    addPostHandler = () => {
        let post = {
            title: this.state.title,
            content: this.state.content,
            author: this.state.author
        };

        axios
            .post('http://jsonplaceholder.typicode.com/posts', post)
            .then( resp => {
                console.log(resp);
                this.setState({ redirect: true })
                // this.props.history.push('/');
            })   
            .catch( err => console.log(err))
    }

    render() {
        let redirect = this.state.redirect ? <Redirect to="/" /> : null;

        return (
            <div className="NewPost">
                {redirect}
                <h1>Add a post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={ (event) => this.setState({ title: event.target.value })} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={ (event) => this.setState({ content: event.target.value })} />
                <label>Author</label>
                <select value={this.state.author} onChange={ (event) => this.setState({ author: event.target.value })}>
                    <option value="Nikita">Nikita</option>
                    <option value="David">David</option>
                </select>
                <button onClick={this.addPostHandler}>Add Post</button>
            </div>
        )
    }
};

export default NewPost;

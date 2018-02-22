import React, { Component } from 'react';
import './App.css';
import Comment from './Comment.js';
import Authors from './Authors.js';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class Post extends Component {
  constructor(props){
    super()
    this.state = {
      body: props.body
    }
  }

  changeBody(e){
    this.setState({
      body: 'well then'
    })
  }

  handleFormInput(e){
    console.log(e);
    this.setState({
      body: e.target.value
    })
  }
  render() {
    let allComments = [
      <Comment body={this.props.comments[0]} />,
      <Comment body={this.props.comments[1]} />,
      <Comment body={this.props.comments[2]} />
    ];
    let allAuthors = this.props.allAuthor.map((author,index) => (
      <Authors author={author} key={index}/>
      ))
    return (

      <div>
          <h1>{this.props.title}</h1>
          <div>{allAuthors}</div>
          <p>{this.state.body}</p>
          <button onClick={(e) => this.changeBody(e)}>changeState</button>
          <input type="text" onChange={(e) => this.handleFormInput(e)} />
       Comments:
        {allComments}
       
      </div>
    );
  }
}

export default Post;

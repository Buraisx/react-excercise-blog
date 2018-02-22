import React, { Component } from 'react';
import './App.css';

import About from './Components/About.js';
import Home from './Components/Home.js';
import Main from './Components/Main.js';
import Movie from './Components/FavoriteMovie.js';
import Food from './Components/FavoriteFood.js';


import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class Post extends Component {
  render() {
   
    return (

      <Router>
        <div>
          <Route exact path='/' component={Home}/>
          <Route path='/blog' component={
            () => <Main title={this.props.title}
                        author={this.props.allAuthor}
                        body={this.props.body}
                        comments={this.props.comments}/>
          }/>
          <Route path='/movies' component={Movie}/>
          <Route path='/foods' component={Food}/>
          <Route path='/about' component={About}/>
        
        <nav>
          <Link to='/'>Home</Link>{' '}
          <Link to='/blog'>Blog</Link>{' '}
          <Link to='/movies'>Movies</Link>{' '}
          <Link to='/foods'>Food</Link>{' '}
          <Link to='/about'>About</Link>
        </nav>
        </div>       
      </Router>
    );
  }
}

export default Post;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './App';
import registerServiceWorker from './registerServiceWorker';

var post = {
	title: "dinosaurs are amazing",
	authors: ["stealthy stegosaurus", "tyler trex", 'coocoo coco'],
	body: "check out this body property",
	comments: ["first!",
	"greate post",
	"hire me"]
}

ReactDOM.render(<Post title={post.title}
	allAuthor={post.authors}
	body={post.body}
	comments={post.comments}/>, 
	document.getElementById('root'));
registerServiceWorker();

import React, {Component} from 'react';
import Comment from '../Comment.js';
import Authors from '../Authors.js';

class Blog extends Component{
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
	render(){
		let allComments = [
		<Comment body={this.props.comments[0]} />,
		<Comment body={this.props.comments[1]} />,
		<Comment body={this.props.comments[2]} />
		];
		let allAuthors = this.props.author.map((author,index) => (
			<Authors author={author} key={index}/>
			));

		return(
			<div>
				<h1>{this.props.title}</h1>
				<p>{allAuthors}</p>
				<div>
					<p>{this.state.body}</p>
					<input type="text" onChange={(e) => this.handleFormInput(e)} />
				</div>
				<h3>Comments:</h3>
				<p>{allComments}</p>
			</div>
			);
	}
}


export default Blog;

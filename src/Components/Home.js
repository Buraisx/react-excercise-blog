import React, {Component} from 'react';

class Home extends Component{
	constructor(){
		super()
		this.state = {
			poem: ''
		}
	}
	componentDidMount(){
		var base = this
		fetch('http://shakeitspeare.com/api/poem')
		.then((res) => {
			return res.json();
		})
		.then((json) => {
			base.setState({
				poem: json['poem']
			})
		})
		.catch((err) => {
			console.log(err)
		})
	}
	render(){
		if(this.state.poem){
			return(
				<div>
					<h1>My fav shakespeare poem</h1>
					{this.state.poem}
				</div>
			)
		}
		return(
			<div>
				<h1>My Fav shakespear poem</h1>
				<p>Loading</p>
			</div>
		);
	}
}


export default Home;

import React, {Component} from 'react';

class About extends Component{
	constructor(){
		super()
		this.state = {
			city:'',
			appearance:'',
			tempHigh: 0,
			tempLow: 0,
			humidity:''
		}
		this.getCity = this.getCity.bind(this)
		this.getWeather = this.getWeather.bind(this)
	}
	getCity(e){
		this.setState({
			city: e.target.value
		})
	}
	getWeather(e){
		e.preventDefault()
		let base = this;
		fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city},CA-ON&appid=052f26926ae9784c2d677ca7bc5dec98`)
		.then((res) => {
			return res.json()
		})
		.then((parsed) => {
			console.log(parsed)
			base.setState({
				city: parsed['name'],
				appearance: parsed['weather'][0]['main'],
				tempHigh: parsed['main']['temp_max'] - 273.15,
				tempLow: parsed['main']['temp_min'] - 273.15,
				humidity: parsed['main']['humidity']
			})
		})
		.catch((err) => {
			console.log(err)
		})
	}
	render(){
		return(
			<div>
				<form onSubmit={this.getWeather}>
					<label>
						Enter your city:
						<input type="text" onChange={(e) => this.getCity(e)}/>
					</label>
					<input type="submit" value="Submit"/>
				</form>
				<p>{this.state.city}:</p>
				<p>Looks: {this.state.appearance}</p>
				<p>TempHigh: {this.state.tempHigh} degrees</p>
				<p>TempLow: {this.state.tempLow} degrees</p>
				<p>Humidity: {this.state.humidity}</p>
			</div>
		)
	}
}


export default About;

import React, { Component } from 'react';


class Authors extends Component {
  render() {
    return (
    	<div>
	    	<p>{this.props.author}</p>
    	</div>
    )
  }
}

export default Authors;

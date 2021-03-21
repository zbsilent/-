import React, { Component } from "react";

class Selectors extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	  	sVo:['成都','北京','广州','上海','深圳'],
	  	index:''
	  };
	}
	change(event){
		// console.log(event);
		this.setState({
			index:event.target.value
		})
	}
	render() {
		let opel = [];
		this.state.sVo.forEach((v,i)=>{
			opel.push(<option key={i}>{v}</option>)
		})
		return (
			<div>
				<select onChange={this.change.bind(this)}>
					{opel}
				</select>
				<div>{this.state.index}</div>
			</div>
		);
	}
}

export default Selectors;

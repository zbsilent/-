import React, { Component } from "react";

class TopContent extends Component {
	change(v) {
		this.setState({
			index: v,
		});
	}
	render() {
		console.log(this);

		let oLi = [];
		this.props.boxValue.topValue.forEach((value, index) => {
			oLi.push(
				<li
					className={index == this.props.index ? "active" : ""}
					key={index}
					onMouseOver={this.props.change.bind(value, index)}
				>
					{value}
				</li>
			);
		});
		return (
			<div className="topBox">
				<ul>{oLi}</ul>
			</div>
		);
	}
}
export default TopContent;

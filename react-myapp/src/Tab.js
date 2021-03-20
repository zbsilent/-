import React, { Component } from "react";

class Tab extends Component {
	// constructor(args) {
	// 	// code
	// }
	componentDidMount() {
		this.autoPlay();
	}
	constructor(props) {
		super(props);

		this.state = {
			index: 0,
			w: 0,
			myTimer: null,
			setTimer: null,
			transitions: 0.7,
		};
	}
	click(index) {
		// console.log(index);
		this.setState({
			index: index,
		});
	}
	leftClick() {
		this.setState({
			index:
				this.state.index - 1 == -1//eslint-disable-line
					? this.props.tabJson.picUrl.length - 1
					: this.state.index - 1,
		});
	}
	rightClick() {
		this.setState({
			index:
				this.state.index + 1 == this.props.tabJson.picUrl.length
					? 0
					: this.state.index + 1,
		});
	}
	mouseOver() {
		clearInterval(this.state.myTimer);
		clearInterval(this.state.setTimer);
		this.setState({
			index:
				this.state.index + 1 == this.props.tabJson.picUrl.length
					? 0
					: this.state.index + 1,
			transitions: 0,
			w: 0,
		});
	}
	mouseOut(){
		this.autoPlay();
	}
	autoPlay(){
		clearInterval(this.state.myTimer);
		clearInterval(this.state.setTimer);

		this.state.myTimer = setTimeout(() => {
			this.setState({
				transitions: this.props.tabJson.timer / 1000,
				w: 100 + "%",
			});
		}, 0);
		this.state.setTimer = setInterval(() => {
			this.setState({
				index:
					this.state.index + 1 == this.props.tabJson.picUrl.length
						? 0
						: this.state.index + 1,
				transitions: 0,
				w: 0,
			});
			setTimeout(() => {
				this.setState({
					transitions: this.props.tabJson.timer / 1000,
					w: 100 + "%",
				});
			}, 0);
		}, this.props.tabJson.timer);
	}

	// methods
	render() {
		console.log(this);
		let aLi = [],
			aOl = [];
		this.props.tabJson.picUrl.forEach((value, index) => {
			aLi.push(
				<li key={index}>
					<img src={value} />
				</li>
			);
			aOl.push(
				<li
					key={index}
					className={index == this.state.index ? "active" : ""}
					onClick={this.click.bind(this, index)}
				/>
			);
		});
		return (
			<div className="tab" onMouseOver={this.mouseOver.bind(this)} onMouseOut={this.mouseOut.bind(this)}>
				<div
					className="line"
					style={{
						transition: this.state.transitions + "s linear",
						width: this.state.w,
					}}
				/>
				<div className="left" onClick={this.leftClick.bind(this)} />
				<ul
					style={{
						width: this.props.tabJson.picUrl.length * 960,
						left: this.state.index * -906,
					}}
				>
					{aLi}
				</ul>
				<ol>{aOl}</ol>
				<div className="right" onClick={this.rightClick.bind(this)} />
			</div>
		);
	}
}

export default Tab;

import React,{Component} from 'react'

class DownContent extends Component{
  render() {
  	let dOl =[];
  	this.props.boxValue.bottomValue.forEach((value,index)=>{
  		dOl.push(<div style={{display:index == this.props.index?'block':'none'}} className='downBox' key={index}>{value}</div>)
  	})
    return (
      <div className='bBox'>{dOl}</div>
    );
  }
}

export default DownContent;

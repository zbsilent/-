
/*require('./index.css')
  import json,{a,b,c} from './a'
  console.log(json.a);
  console.log(a);*/
import React from 'react';
import ReactDOM from 'react-dom';
import Title from './Title.js'
class Reo extends React.Component{

  constructor(){
    super()
    this.state={
      msg:'hello'
    }
  }
   
  show(){
    console.log(1)

  }
  render(){
    return (
      <div>
        <Title setMsg={this.state.msg}/>
        <input type='button' onClick={this.show.bind(this)}/>
      </div>)
  }
}

ReactDOM.render(<Reo/>,document.getElementById("app"))

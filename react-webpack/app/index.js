// require('./index.css')
//   import json,{a,b,c} from './a'
//   console.log(json.a);
//   console.log(a);
import React from 'react';
import ReactDOM from 'react-dom';
import Title from '/Title.js'
import TabReactPlugin from '/TabBox'
//这里是app的上级
let jsonValue = {
  topValue: ['tab1', 'tab2', 'tab3'],
  bottomValue: ['tab1的value', 'tab2的value', 'tab3的value']
}


class Reo extends React.Component {



  constructor() {
    super()
    this.state = {
      msg: 'hello'
    }
  }

  show() {
    console.log(1)

  }
  render() {
    return (
      <div>
         // <Title setMsg={this.state.msg}/>
         <input type='button' onClick={this.show.bind(this)}/>
         <TabReactPlugin allValue={this.props.vale}/>
      </div>)
  }
}

ReactDOM.render(<Reo vale={jsonValue}/>, document.getElementById("app"))
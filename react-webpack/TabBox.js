import React from 'react'
import TopContent from './TopContent';
import DownContent from './DownContent';
require('./tabCss.css')


class TabReactPlugin extends React.Component {
  constructor() {
    super()

  }
  render() {
    console.log(this);
    return (
      <div className='outBox'>
        <TopContent boxValue={this.props.allValue}/>
        <DownContent/>
      </div>
    )
  }
}
export default TabReactPlugin;
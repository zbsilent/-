import React from "react";
import TopContent from "./TopContent";
import DownContent from "./DownContent";
require("./tabCss.css");

class TabReactPlugin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
    };
  }
  change(v) {
    this.setState({
      index: v
    })
  }

  render() {
    console.log(this);
    return (
      <div className="outBox">
        <TopContent
          boxValue={this.props.allValue}
          index={this.state.index}
          change={this.change.bind(this)}
        />
        <DownContent boxValue={this.props.allValue} index={this.state.index} />
      </div>
    );
  }
}
export default TabReactPlugin;

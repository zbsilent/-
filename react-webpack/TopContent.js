import React, {
    Component
} from 'react'

class TopContent extends Component {
    render() {
        console.log(this.props.boxValue.topValue);
        return (
            <div>我是上面的组件</div>
        )
    }
}

export default TopContent;
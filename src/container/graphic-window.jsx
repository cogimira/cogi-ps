import React from 'react';
import './style/graphic-window.css'

class GraphicWindow extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        let {width, height} = this.props;
        return (<div className="graphic-window-container" style={{width: width, height: height}}>
            
        </div>)
    }
}

export default GraphicWindow;
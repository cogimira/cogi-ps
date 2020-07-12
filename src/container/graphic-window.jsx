import React from 'react';
import './style/graphic-window.css'

class GraphicWindow extends React.Component {
    constructor(props) {
        super(props);
        this.containerRef = React.createRef();
    }

    getWindowContainer() {
        return this.containerRef.current;;
    }

    render() {
        let {width, height} = this.props;
        return (<div ref={this.containerRef} className="graphic-window-container" style={{width: width, height: height}}>
            
        </div>)
    }
}

export default GraphicWindow;
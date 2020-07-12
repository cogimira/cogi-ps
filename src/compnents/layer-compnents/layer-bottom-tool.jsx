import React from 'react';
import './style/layer-bottom-tool.css';


class LayerBottomTool extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const {createLayer} = this.props;
        return (<div className="layer-bottom-tool-c">
            <span onClick={(e) => { e.stopPropagation(); createLayer(e)}}>创建</span>
        </div>)
    }
}

export default LayerBottomTool;
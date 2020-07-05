import React from 'react';
import LayerEye from './layer-eye';
import './style/layer-item-container.css'

class LayerItemContainer extends React.Component {
    constructor(props) {
        super(props);

        this.onEyeChange = this.onEyeChange.bind(this);
    }

    onEyeChange(newState) {

    }

    render() {
        const {sortId} = this.props;
        return (<div className="cogi-layer-item-c">
            <LayerEye onEyeChange={this.onEyeChange}/>
            <span style={{color: "white", textAlign: "center", width: "4rem", display: "inline-block", lineHeight:"2rem"}}>{sortId}</span>
        </div>)
    }
}

export default LayerItemContainer;
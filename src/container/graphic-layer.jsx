import React from 'react';
import './style/graphic-layer.css';
import LayerItemContainer from '../compnents/layer-compnents/layer-item-container';
import LayerBottomTool from '../compnents/layer-compnents/layer-bottom-tool';
import SortDraggGroup from './sort-dragg-group';

class GraphicLayer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className="graphic-layer-c">
            <SortDraggGroup>
                <LayerItemContainer sortId="1"/>
                <LayerItemContainer sortId="2"/>
                <LayerItemContainer sortId="3"/>
                <LayerItemContainer sortId="4"/>
                <LayerItemContainer sortId="5"/>
            </SortDraggGroup>
            <LayerBottomTool/>
        </div>);
    }
}

export default GraphicLayer
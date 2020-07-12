import React from 'react';
import './style/graphic-layer.css';
import LayerItemContainer from '../compnents/layer-compnents/layer-item-container';
import LayerBottomTool from '../compnents/layer-compnents/layer-bottom-tool';
import SortDraggGroup from './sort-dragg-group';

class GraphicLayer extends React.Component {
    constructor(props) {
        super(props);
        this.psVm = this.props.psVm;
        let layerData = this.psVm.getLayers();
        this.state = {
            layers: layerData
        }

        this.updateLayers = this.updateLayers.bind(this);
        this.sortChange = this.sortChange.bind(this);
    }

    componentDidMount() {
        this.psVm.on("layer_change", this.updateLayers);
    }

    updateLayers(data) {
        this.setState({layers: data});
    }

    sortChange(targetId, newIndex, oldIndex) {
        console.log(targetId);
        console.log(newIndex);
        console.log(oldIndex);
    }

    componentWillUnmount() {
        this.psVm.off("layer_change", this.updateLayers);
    }

    render() {
        const {layers} = this.state;
        return (<div className="graphic-layer-c">
            <SortDraggGroup disableH={true} sortChange={this.sortChange}>
                {
                    layers.map((element, index) => {
                        return <LayerItemContainer key={index} sortId={element.layerId}/>
                    })
                }
            </SortDraggGroup>
            <LayerBottomTool/>
        </div>);
    }
}

export default GraphicLayer
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

    findInsertLayer(layerId) {
        let findLayer = null;
        let layers = this.state.layers;
        layers.forEach((item) => {
            if(item.layerId === layerId) {
                findLayer = item;
            }
        });
        return findLayer;
    }

    sortChange(targetId, newIndex, oldIndex) {
        if(newIndex === oldIndex) {
            return;
        }
        let insertLayerData = this.findInsertLayer(targetId);
        let newLayes = [];
        let layers = this.state.layers;
        for(let i = 0; i < layers.length; i++) {
            if(targetId !== layers[i].layerId) {
                if(newLayes.length === newIndex) {
                    newLayes.push(insertLayerData);
                }
                newLayes.push(layers[i]);
            }
        }
        this.updateLayers(newLayes);
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
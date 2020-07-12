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
        this.createLayer = this.createLayer.bind(this);
    }

    componentDidMount() {
        this.psVm.on("graphic-layer-created", this.updateLayers);
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
            if(newLayes.length === newIndex) {
                newLayes.push(insertLayerData);
            }
            if(targetId !== layers[i].layerId) {
                newLayes.push(layers[i]);
            } else {
                newLayes.push(null);
            }
        }
        let newLayesEnd = [];
        newLayes.forEach((item) => {
            if(item) {
                newLayesEnd.push(item);
            }
        });
        this.updateLayers(newLayesEnd);
    }

    componentWillUnmount() {
        this.psVm.off("layer_change", this.updateLayers);
    }

    createLayer() {
        this.psVm.createLayer('blank');
    }

    render() {
        const {layers} = this.state;
        return (<div className="graphic-layer-c">
            <SortDraggGroup disableH={true} sortChange={this.sortChange}>
                {
                    layers.map((element, index) => {
                        return <LayerItemContainer key={element.layerId + "_layer"} sortId={element.layerId}/>
                    })
                }
            </SortDraggGroup>
            <LayerBottomTool createLayer={this.createLayer}/>
        </div>);
    }
}

export default GraphicLayer
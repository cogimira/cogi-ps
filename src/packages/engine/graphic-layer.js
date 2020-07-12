import {uid} from '../webgl-lib/util/lib';

export default class GraphicLayer {
    constructor(layerId, layerType) {
        this.layerId = layerId || uid(20);
        this.layerType = layerType;
    }

    encodeLayer() {
        return {
           layerId: this.layerId,
           layerType: this.layerType 
        }
    }
}
import EventEmitter from 'events';
import GraphicWindow from './engine/graphic-window';
import GraphicLayer from './engine/graphic-layer';


export default class CogiPS extends EventEmitter{
    constructor() {
        super();
        setTimeout(() => {
            this.emit("loaded")
        }, 500);

        this.graphicWindows = [];
        this.layers = [];
    }

    createGraphicWindow(width, height, options) {
        let newWindow = new GraphicWindow(null, width, height);
        this.graphicWindows.push(newWindow);
        this.emit('graphic-created', {
            width, height, windowId: newWindow.id
        });
        return newWindow;
    }

    getCurrentTooSelect() {
        return 'select';
    }

    getGraphicWindowById(id) {
        let tagetGraphic = null;
        this.graphicWindows.forEach((item) => {
            if(item.id === id) {
                tagetGraphic = item;
            }
        });
        return tagetGraphic;
    }

    getLayers() {
        let encodeData = [{layerId: "1"},{layerId: "2"},{layerId: "3"}, {layerId: "4"}, {layerId: "5"}, {layerId: "7"}, {layerId: "8"}, {layerId: "9"}];
        for(let i = 0; i < this.layers.length; i++) {
            let layerData = this.layers[i].encodeLayer();
            encodeData.push(layerData);
        }
        return encodeData;
    }

    createLayer(type) {
        let layer = new GraphicLayer(null, type);
        this.layers.push(layer);
        let layerData = this.getLayers();
        this.emit('graphic-layer-created', layerData);

    }

    createWindow(container, graphicId) {
        let rect = container.getClientRects()[0];
        let width = rect.width;
        let height = rect.height;
        if(!graphicId) {
            let graphicWindow = this.createGraphicWindow(width, height);
            graphicId = graphicWindow.id;
        }
        let graphicWindow = this.getGraphicWindowById(graphicId);
        let canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        container.appendChild(canvas);
        graphicWindow.initCanvas(canvas);
    }


}
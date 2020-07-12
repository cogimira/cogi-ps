import EventEmitter from 'events';
import GraphicWindow from './graphic-window'

export default class CogiPS extends EventEmitter{
    constructor() {
        super();
        setTimeout(() => {
            this.emit("loaded")
        }, 500);

        this.graphicWindows = [];
    }

    createGraphicWindow(width, height, options) {
        let newWindow = new GraphicWindow(null, width, height);
        this.graphicWindows.push(newWindow);
        this.emit('graphic-created', {
            width, height, windowId: newWindow.id
        });
        return newWindow;
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
        return [
            {layerId: "1"},{layerId: "2"},{layerId: "3"},{layerId: "4"}
        ]
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
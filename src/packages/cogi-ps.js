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
        let newWindow = new GraphicWindow();
        this.graphicWindows.push(newWindow);
        this.emit('graphic-created', {
            width, height
        })
    }
}
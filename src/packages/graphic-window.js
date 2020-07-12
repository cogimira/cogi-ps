import {uid} from './webgl-lib/util/lib'

export default class GraphicWindow {
    constructor(id, width, height) {
        this.id = id || uid(20);
        this.width = width;
        this.height = height;
    }

    initCanvas(canvas) {
        this.canvas = canvas;
    }
}
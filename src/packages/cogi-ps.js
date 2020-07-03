import EventEmitter from 'events';

export default class CogiPS extends EventEmitter{
    constructor() {
        super();
        setTimeout(() => {
            this.emit("loaded")
        }, 1000);
    }
}
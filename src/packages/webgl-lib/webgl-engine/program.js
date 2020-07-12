import Shader from './shader';
import {createProgram, createShader} from '../util/lib';

export default class Program {
    constructor(gl, id) {
        this.id = this.id;
        this._gl = gl;

        this._glProgram = null;
    }

    /**
     * 创建shader, 并编译program
    */
    createShader(data) {
        let vertextShaderSource = data.vertex;
        let fragmentShaderSource = data.fragment;
        let attributes = data.attributes;
        let uniforms = data.unoforms;
        let shader = new Shader(this._gl, vertextShaderSource, fragmentShaderSource, {attributes, uniforms});
        let vertexShader = createShader(this._gl, this._gl.VERTEX_SHADER, vertextShaderSource);
        let fragmentShader = createShader(this._gl, this._gl.FRAGMENT_SHADER, fragmentShaderSource);
        this._glProgram = createProgram(this._gl, vertexShader, fragmentShader);
        this._shader = shader;
        this._shader.attachedProgram = this;
        this._shader.loadLocation();
    }

    /**
     * 
    */
    updateAttribute(name, newValue) {
        this._shader.updateAttribute(name, newValue);
    }

    updateUniform(name, newValue) {
        this._shader.updateUniform(name, newValue);
    }

}
import {copyArray} from '../util/lib';
import Vec2 from '../math/vec2';
import Vec3 from '../math/vec3';
import Vec4 from '../math/vec4';

export default class Shader {
    constructor(gl, vertexSource, fragmentSource, options) {
        this._gl = gl;
        this._vertexSource = vertexSource;
        this._fragmentSource = fragmentSource;
        this.attributes = options.attributes || [];
        this.uniform = options.uniforms || [];

        this.attachedProgram = null;
    }

    getAttributeList() {
        return copyArray(this.attributes);
    }

    getUniformList() {
        return copyArray(this.uniform);
    }

    loadLocation() {
        let attributes = this.getAttributeList();
    }

    updateAttribute(name, newValue) {

    }

    updateUniform(name, newValue) {

    }

}
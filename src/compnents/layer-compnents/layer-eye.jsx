import React from 'react';
import './style/layer-eye.css'
class LayerEye extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            show: true
        }

        this.eyeClick = this.eyeClick.bind(this);
    }

    eyeClick(e) {
        e.stopPropagation();
        let {onEyeChange} = this.props;
        let newShow = !this.state.show;
        if(onEyeChange) {
            onEyeChange(newShow);
        }
        this.setState({
            show: newShow
        });
    }

    render() {
        const show = this.state.show;
        return (<span className="cogi-layer-eye-c" onClick={this.eyeClick}>
            {show ? <i className="gg-eye-alt"></i> : null}
        </span> )
    }
}

export default LayerEye;
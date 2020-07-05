import React from 'react';
import './style/dialog-wrapper.css'

class DialogWapper extends React.Component {
    constructor(props) {
        super(props);
        this.click = this.click.bind(this);
    }

    click(e) {
        e.stopPropagation()
        e.preventDefault();
    }

    render() {
        let {children, height, width, background, style} = this.props;
        style = style || {};
        return (<div className="dialog-wrapper" style={{borderRadius: "0.2rem", padding: "0.5rem", ...style, width, height, background}} onClick={this.click}>
            {children}
        </div>)
    }
}

export default DialogWapper;
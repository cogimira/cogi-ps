import React from 'react';
import './style/dialog-wrapper.css'

class DialogWapper extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {children, height, width, background} = this.props;
        return (<div className="dialog-wrapper" style={{width, height, background}}>
            {children}
        </div>)
    }
}

export default DialogWapper;
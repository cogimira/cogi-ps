import React from 'react';
import './style/cogi-button.css';

class CogiButton extends React.PureComponent {
    constructor(props) {
        super(props);
        this.sizeStyles = {
            small: {lineHeight: '1.2rem', fontSize: '0.8rem'},
            middle: {lineHeight: '1.5rem', fontSize: '1rem'},
            large: {lineHeight: '2rem', fontSize: '1.3rem'},
            defaultSize: {lineHeight: '1.2rem', fontSize: '0.8rem'},
        }
    }

    getStyleByType(cogiSize) {
        cogiSize = cogiSize || 'defaultSize';
        return this.sizeStyles[cogiSize];
    }

    render() {
        let {label, onClick, cogiSize, style} = this.props;
        const defaultLabel = '默认按钮';
        let propstyle = style || {};
        const btnStyle = this.getStyleByType(cogiSize);
        return (<span className="cogi-botton" onClick={onClick} style={{...btnStyle, ...propstyle}}>{label || defaultLabel}</span>);
    }
}

export default CogiButton;
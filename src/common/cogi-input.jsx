import React from 'react';
import './style/cogi-input.css'

class CogiInput extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const {label, onFocus, onInput, onBlur, onchange} = this.props;
        // const { }
        return (
            <div className="cogi-input-c">
                <span className="cogi-input-label">{label}</span>
                <span>
                    <input className="cogi-input-input" 
                    onFocus={onFocus} 
                    onInput={onInput}
                    onBlur={onBlur}
                    onChange={onchange}
                    />
                </span>
                <span className="cogi-input-label-tail">
                    px
                </span>
            </div>
        )
    }
}

export default CogiInput;
import React from 'react';
import './style/center-body.css';
import GraphicWindow from './graphic-window';
class CenterBody extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (<div className="center-body">
            <GraphicWindow width="60rem" height="35rem"/>
        </div>);
    }
}

export default CenterBody;
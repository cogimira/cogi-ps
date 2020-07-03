import React from 'react';
import './style/center-body.css'
class CenterBody extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (<div className="center-body"></div>);
    }
}

export default CenterBody;
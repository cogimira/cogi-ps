import React from 'react';
// import DropDown from '../compnents/drop-down';
import './style/top-toolbar.css';

class TopToolbar extends React.Component {
    constructor() {
        super();
        this.tools = ['文件'];
    }

    componentDidMount() {

    }

    DropDownClick(name) {
        console.log(name);
    }

    render() {
        return (<div className='top-container'>
            <div className="logo">cogi</div>
            <div className="bar-container">
                
            </div>
        </div>)
    }
}

export default TopToolbar;
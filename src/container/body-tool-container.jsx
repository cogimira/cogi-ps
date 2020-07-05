import React from 'react';
import BodyDragger from './body-dragger';
import LeftToolBox from './left-tool-box';
import GraphicLayer from './graphic-layer';

class BodyToolContainer extends React.Component {
    constructor(props) {
        super(props);

        this.leftToolBoxMenuClick = this.leftToolBoxMenuClick.bind(this);
    }

    leftToolBoxMenuClick(idName) {
        console.log(idName);
    }

    toolBoxHeader(lable) {
        let headerStyle = {fontSize: "0.7rem", textAlign: "center", color: "white"}
        return <div className="tool-box-header" style={headerStyle}>{lable}</div>
    }

    render() {
        let containerStyle={width: "3.3rem", left: "5rem", top: "10rem"};
        let containerStyle2={width: "15rem", right: "0.5rem", top: "3rem"};
        return (<div className="body-tool-container">
            <BodyDragger containerStyle={containerStyle}  headerChildren={this.toolBoxHeader('工具栏')}>
                <LeftToolBox menuClick={this.leftToolBoxMenuClick}/>
            </BodyDragger>
            <BodyDragger containerStyle={containerStyle2} headerChildren={this.toolBoxHeader('图层')}>
                <GraphicLayer/>
            </BodyDragger>

           
        </div>)
    }
}

export default BodyToolContainer;
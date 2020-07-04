import React from 'react';
import BodyDragger from './body-dragger';
import LeftToolBox from './left-tool-box';

class BodyToolContainer extends React.Component {
    constructor(props) {
        super(props);

        this.leftToolBoxMenuClick = this.leftToolBoxMenuClick.bind(this);
    }

    leftToolBoxMenuClick(idName) {
        console.log(idName);
    }

    toolBoxHeader() {
        let headerStyle = {fontSize: "0.7rem", textAlign: "center", color: "white"}
        return <div className="tool-box-header" style={headerStyle}>工具栏</div>
    }

    render() {
        let containerStyle={width: "3.3rem", left: "5rem", top: "10rem"};
        let containerStyle2={width: "15rem", left: "15rem", top: "3rem"};
        return (<div className="body-tool-container">
            <BodyDragger containerStyle={containerStyle}  headerChildren={this.toolBoxHeader()}>
                <LeftToolBox menuClick={this.leftToolBoxMenuClick}/>
            </BodyDragger>
            <BodyDragger containerStyle={containerStyle2}>
                <div style={{background: "rgb(57, 61, 61)", color: "white", lineHeight: "2rem", textAlign: "center"}}>1</div>
            </BodyDragger>

            <BodyDragger containerStyle={{width: "15rem", left: "5rem", top: "8rem"}}>
                <div style={{background: "rgb(57, 61, 61)", color: "white", lineHeight: "2rem", textAlign: "center"}}>1</div>
            </BodyDragger>

            <BodyDragger containerStyle={{width: "15rem", left: "15rem", top: "10rem"}}>
                <div style={{background: "rgb(57, 61, 61)", color: "white", lineHeight: "2rem", textAlign: "center"}}>1</div>
            </BodyDragger>

            <BodyDragger containerStyle={{width: "15rem", left: "25rem", top: "12rem"}}>
                <div style={{background: "rgb(57, 61, 61)", color: "white", lineHeight: "2rem", textAlign: "center"}}>1</div>
            </BodyDragger>
        </div>)
    }
}

export default BodyToolContainer;
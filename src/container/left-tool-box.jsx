import React from 'react';
import './style/left-tool-box.css'

class LeftToolBox extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            selectIdName: ""
        }
        this.toolList = [
            {label: '选择', idName: 'tool-select'},
            {label: '文字', idName: 'tool-text-edit'},
            {label: '线段', idName: 'too-graphic-line'},
            {label: '矩形', idName: 'too-graphic-rect'},
            {label: '椭圆', idName: 'too-graphic-eclip'},
        ]
        this.itemClick = this.itemClick.bind(this);
        
    }

    itemClick(e, idName) {
        this.setState({
            selectIdName: idName
        });
        e.stopPropagation();
        const {menuClick} = this.props;
        if(menuClick) {
            menuClick(idName);
        }
        
    }

    render() {
        const toolList = this.toolList;
        const selectIdName = this.state.selectIdName;
        debugger;
        return (
            <React.Fragment>
                {toolList.map((item, index) => {
                    return <div className={'left-tool-item' + (item.idName == selectIdName ? ' left-tool-item-active' : '')} 
                    key={item.idName} 
                    onClick={(e) => { this.itemClick(e, item.idName)}}
                    style={index < toolList.length-1 ? {borderBottom: "0.01rem solid gray"} : null}>
                        {item.label}
                    </div>
                })}                
            </React.Fragment>
        );
    }
}

export default LeftToolBox;
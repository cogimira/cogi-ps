import React from 'react';
import Dropdown from '../compnents/dropdown';
import './style/top-toolbar.css';

class TopToolbar extends React.Component {
    constructor() {
        super();
        this.tools = [
            {
                label: '文件', 
                menu: [{label: '新建窗口', name: "creat-window"}, {label: '导出文件', name: "export-cogi"}, {label: '导入文件', name: "import-cogi"}],
                idName: 'file'
            },
            {
                label: '编辑', 
                menu: [{label: '移动', name: "cogi-translate"}, {label: '缩放', name: "cogi-scale"}, {label: '旋转', name: "cogi-rotate"}, {label: '样式', name: "cogi-style"}],
                idName: 'edit'
            }
        ];

        this.toobarMenuClick = this.toobarMenuClick.bind(this);
        this.toobarClick = this.toobarClick.bind(this);

        this.initRef(this.getKeys(this.tools));
    }

    componentDidMount() {

    }

    toobarMenuClick(name) {
        console.log(name);
    }

    initRef(data) {
        data.forEach((name) => {
            this[`${name}_ref`] = React.createRef();
        });
    }

    getKeys(data) {
        let res = [];
        data.forEach((item) => {
            res.push(item.idName);
        });
        return res;
    }

    toobarClick(idName) {
        let allToolKeys = this.getKeys(this.tools);

        allToolKeys.forEach((id) => {
        debugger
            if(id !== idName) {
                let key = `${id}_ref`;
                this[key].current.hideMenu();
            } else {
                let key = `${id}_ref`;
                this[key].current.toggle();
                
            };
        });
    }

    render() {
        const tools = this.tools;
        return (<div className='top-container'>
            <div className="logo">cogi</div>
            <div className="bar-container">
                {tools.map((item, index) => {
                    return <Dropdown 
                    toobarClick={this.toobarClick} 
                    ref={this[`${item.idName}_ref`]} 
                    key={item.idName} idName={item.idName} 
                    label={item.label} 
                    dropdownMenu={item.menu} 
                    toobarMenuClick={this.toobarMenuClick}/>
                })}
            </div>
        </div>)
    }
}

export default TopToolbar;
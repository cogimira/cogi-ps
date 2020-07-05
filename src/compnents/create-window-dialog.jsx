import React from 'react';
import CogiButton from '../common/cogi-button';
import CogiInput from '../common/cogi-input'
import './style/create-window-dialog.css'

class CreateWindowDialog extends React.Component {
    constructor(props) {
        super(props);
        this.closeWidnow = this.closeWidnow.bind(this);
        this.sureClick = this.sureClick.bind(this);
    }

    closeWidnow(e) {
        console.log('closeWidnow');
    }

    sureClick(e) {
        console.log('sureClick');
    }

    render() {
        return (<div className="create-window-container">
            <div className="cwd-edit-body">
                <div>
                    <CogiInput label="宽度:"/>
                </div>
                <div style={{marginTop: "0.5rem"}}>
                    <CogiInput label="高度:"/>
                </div>
                {/* <div>
                    <span>背景：</span>
                    <span>纯色</span>
                </div> */}
            </div>
            <div className="cwd-bottom-right-c">
                <CogiButton label="确定" onClick={this.sureClick}/>
                <CogiButton label="关闭" onClick={this.closeWidnow}/>
            </div>
        </div>)
    };
}

export default CreateWindowDialog;
import React from 'react';
import CogiButton from '../common/cogi-button';
import CogiInput from '../common/cogi-input'
import './style/create-window-dialog.css'

class CreateWindowDialog extends React.Component {
    constructor(props) {
        super(props);
        this.closeWidnow = this.closeWidnow.bind(this);
        this.sureClick = this.sureClick.bind(this);

        this.wInputonFocus = this.wInputonFocus.bind(this);
        this.wInputonInput = this.wInputonInput.bind(this);
        this.wInputonFocus = this.wInputonFocus.bind(this);
        this.wInputonBlur = this.wInputonBlur.bind(this);
        this.wInputonChange = this.wInputonChange.bind(this);

        this.hInputonBlur = this.hInputonBlur.bind(this);

        this.width = "800px";
        this.height = "600px"
    }

    closeWidnow(e) {
        console.log('closeWidnow');
    }

    sureClick(e) {
        console.log('sureClick');
        let {windowCreate} = this.props;
        if(windowCreate) {
            windowCreate({
                width: this.width,
                height: this.height
            });
        }
    }

    wInputonFocus(e) {
        console.log(e)
    }

    wInputonInput(e) {
        // console.log(e.target.value,)
    }

    wInputonBlur(e) {
        this.width = parseInt(e.target.value);
    }

    hInputonBlur(e) {
        this.height = parseInt(e.target.value);
    }

    wInputonChange(e) {
        console.log(e)
    }

    render() {
        return (<div className="create-window-container">
            <div className="cwd-edit-body">
                <div>
                    <CogiInput label="宽度:"
                    onFocus={this.wInputonFocus} 
                    onInput={this.wInputonInput}
                    onBlur={this.wInputonBlur}
                    onChange={this.wInputonchange} 
                    />
                </div>
                <div style={{marginTop: "0.5rem"}}>
                    <CogiInput label="高度:" 
                    onBlur={this.hInputonBlur}/>
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
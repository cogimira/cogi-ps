// 编辑状态l栏目
import React from 'react';
import './style/editing-state.css';
class EditingState extends React.Component {
    constructor(props) {
        super(props);
        this.psVm = this.props.psVm;

        this.showConfig = {
            
        }
    }

    componentDidMount() {
        let toolSelect = this.psVm.getCurrentTooSelect();
    }

    

    render() {
        return (<div className="editing-state-container">
            toolSelect
        </div>)
    }
}

export default EditingState
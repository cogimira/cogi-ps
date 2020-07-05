import React from 'react';
import {connect} from 'react-redux';
import './style/dialog-body.css';
import { renderDialog, hideDialog} from '../store/index';

class DialogBody extends React.Component {
    constructor(props) {
        super(props);
        this.blankClick = this.blankClick.bind(this);
    }

    blankClick(e) {
        e.stopPropagation();
        this.props.hideDialog();
    }

    getShowBody() {
        const {dialogChildren, showDialog} = this.props;
        // debugger;
        if(showDialog) {
            return (<div className="dialog-container" onClick={this.blankClick}>
                <div className="dialog-container-back"></div>
                {dialogChildren}
            </div>)
        } else {
            return null
        }
    }
    render() {
        return this.getShowBody();
    }
}

const mapStateToProps = (state) => {
    return {
        showDialog: state.dialog.isShowDialog,
        dialogChildren: state.dialog.dialogChildren
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        renderDialog: () => {
            const {children, width, height} = ownProps;
            dispatch(renderDialog(width, height, children));
        },
        hideDialog: () => {
            dispatch(hideDialog());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DialogBody);
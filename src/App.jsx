import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import {showFileDropDown, hideFileDropDown} from './store/index';
// import CogiPS from './packages/cogi-ps';
import TopToolbar from './container/top-toolbar';
import CenterBody from './container/center-body';
import BodyToolContainer from './container/body-tool-container';
import DialogBody from './container/dialog-body';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.name = "sdsd";
    this.wsref = React.createRef();
    // this.psVm = new CogiPS();
    this.psVm = this.props.psVm;
  }

  componentDidMount() {
    console.log(this.props.psVm);
  }

  render() {
    const {showFileDropDownq, hideFileDropDownq, showDropDownq} = this.props;
    return (
      <React.Fragment>
        <CenterBody psVm={this.psVm}/>
        <TopToolbar psVm={this.psVm}/>
        <BodyToolContainer psVm={this.psVm}/>
        <DialogBody/>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    showDropDownq: state.file.showFileDropDown
  }
}

// showFileDropDown
const mapDispatchToProps = dispatch => {
  return {
    showFileDropDownq: () => {
      dispatch(showFileDropDown());
    },
    hideFileDropDownq: () => {
      dispatch(hideFileDropDown());
    },
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(App);

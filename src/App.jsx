import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import {showFileDropDown, hideFileDropDown} from './store/index';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.name = "sdsd";
    this.wsref = React.createRef();
  }

  componentDidMount() {
    
  }

  render() {
    const {showFileDropDownq, hideFileDropDownq, showDropDownq} = this.props;
    return (
      <div className="App">
        <div className="workspace" ref={this.wsref}>
          this is test </div>
          {showDropDownq ? <div>file drop down</div> : null}
          <button onClick={showFileDropDownq}>show</button>
          <button onClick={hideFileDropDownq}>hide</button>
      </div>
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

import React from 'react';
import './style/center-body.css';
import GraphicWindow from './graphic-window';
class CenterBody extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);

        this.state = {
            width: '60rem',
            height: '35rem',
            show: false
        }

        this.windowRef = React.createRef();
    }

    componentDidMount() {
        let {psVm} = this.props;
        psVm.on("graphic-created", (data) => {
            let width = data.width;
            let height = data.height;
            let windowId = data.windowId;
            this.setState({
                width: width + 'px',
                height: height + 'px',
                show: true
            });
            setImmediate(() => {
                let container = this.windowRef.current.getWindowContainer()
                psVm.createWindow(container, windowId);
            }, 100);
        });
    }

    render() {
        const {width, height, show} = this.state;
        return (<div className="center-body">
            {
                show ? <GraphicWindow ref={this.windowRef} width={width} height={height} /> : null
            }
        </div>);
    }
}

export default CenterBody;
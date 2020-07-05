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
    }

    componentDidMount() {
        let {psVm} = this.props;
        psVm.on("graphic-created", (data) => {
            let width = data.width;
            let height = data.height;
            this.setState({
                width: width + 'px',
                height: height + 'px',
                show: true
            });
        });
    }

    render() {
        const {width, height, show} = this.state;
        return (<div className="center-body">
            {
                show ? <GraphicWindow width={width} height={height} /> : null
            }
        </div>);
    }
}

export default CenterBody;
import React from 'react';
import './style/body-dragger.css'

class BodyDragger extends React.Component{
    constructor(props) {
        super(props);

        this.draggStart = this.draggStart.bind(this);
        this.draggMove = this.draggMove.bind(this);
        this.endDrag = this.endDrag.bind(this);

        this.dragging = false;
        this.dragContainer = React.createRef();

        this.deltaX = 0;
        this.deltaY = 0;
    }

    draggStart(e) {
        this.dragging = true;
        let rect = this.dragContainer.current.getClientRects()[0];
        this.deltaX = rect.x - e.pageX;
        this.deltaY = rect.y - e.pageY;
        e.stopPropagation();
        e.preventDefault();
        window.addEventListener("mousemove", this.draggMove);
        window.addEventListener("mouseup",this.endDrag);
    }

    draggMove(e) {
        if(this.dragging) {
            let newX = e.pageX + this.deltaX;
            let newY = e.pageY + this.deltaY;
            this.dragContainer.current.style.left = newX + "px";
            this.dragContainer.current.style.top = newY + "px";
        }
    }

    endDrag(e) {
        this.dragging = false;
        window.removeEventListener("mousemove", this.draggMove);
        window.removeEventListener("mouseup",this.endDrag);
    }

    render() {
        const {containerStyle, children, headerChildren} = this.props;
        return (<div className="body-dragger-container" style={containerStyle} ref={this.dragContainer}>
            <div className="body-dragger-header" onMouseDown={this.draggStart}>
                {headerChildren}
            </div>
            {children ? children : null}
        </div>)
    }
}

export default BodyDragger;
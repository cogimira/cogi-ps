import React from 'react';
import SortDraggItem from './sort-dragg-item';
import './style/sort-dragg-group.css'

class SortDraggGroup extends React.Component {
    constructor(props) {
        super(props);
        this.isDragging = false;

        this.dragStart = this.dragStart.bind(this);
        this.dragging = this.dragging.bind(this);
        this.endDrag = this.endDrag.bind(this);

        this.state = {
            wrapperChild: null
        }

        this.offsetRef = React.createRef();
        this.offsetRefC = React.createRef();
        

    }

    dragStart(data) {
        console.log(data);
        data.event.stopPropagation();
        data.event.preventDefault();
        window.addEventListener("mousemove", this.dragging);
        window.addEventListener("mouseup",this.endDrag);
        this.dragging(data.event);
        this.setState( {
            wrapperChild: <SortDraggItem sortId={data.sortId} props={{...data.props}}>
                {data.children}
            </SortDraggItem>
        });
    }

    dragging(e) {
        let pageX = e.pageX;
        let pageY = e.pageY;
        let localRect = this.offsetRefC.current.getClientRects()[0];
        let deltaX = pageX - localRect.left;
        let deltaY = pageY - localRect.top;
        // 限制水平方向拖动
        if(!this.props.disableH) {
            this.offsetRef.current.style.left = deltaX + "px";
        }
        this.offsetRef.current.style.top = deltaY + "px";
        this.offsetRef.current.style.zIndex = 1000;


    }

    endDrag(e) {
        window.removeEventListener("mousemove", this.dragging);
        window.removeEventListener("mouseup",this.endDrag);
        this.offsetRef.current.style.left = 0 + "px";
        this.offsetRef.current.style.top = 0 + "px";
        this.setState( {
            wrapperChild: null
        });
    }

    render() {
        const {children} = this.props;
        const {wrapperChild} = this.state;
        return (<React.Fragment>
            <div className="sort-group-dragg-c" ref={this.offsetRefC}>
                <div className="sort-wrapper" ref={this.offsetRef}>
                    {wrapperChild}
                </div>
            </div>
            {children.map((item, index) => {
                return <SortDraggItem key={index} sortId={item.props.sortId} 
                dragStart={this.dragStart}
                dragging={this.dragging}
                endDrag={this.endDrag} >
                    {item}
                </SortDraggItem>
            })}
        </React.Fragment>);
    }
}

export default SortDraggGroup;
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


    }

    dragStart(data) {
        console.log(data);
        data.event.stopPropagation();
        data.event.preventDefault();
        window.addEventListener("mousemove", this.dragging);
        window.addEventListener("mouseup",this.endDrag);

        this.setState( {
            wrapperChild: <SortDraggItem sortId={data.sortId} props={{...data.props}}>
                {data.children}
            </SortDraggItem>
        });
    }

    dragging(e) {

    }

    endDrag(e) {
        window.removeEventListener("mousemove", this.dragging);
        window.removeEventListener("mouseup",this.endDrag);
        this.setState( {
            wrapperChild: null
        });
    }

    render() {
        const {children} = this.props;
        const {wrapperChild} = this.state;
        return (<React.Fragment>
            <div className="sort-group-dragg-c">
                <div className="sort-wrapper">
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
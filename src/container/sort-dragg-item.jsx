import React from 'react';

class SortDraggItem extends React.Component {
    constructor(props) {
        super(props);
        this.dragStart = this.dragStart.bind(this);
        this.dragRef = React.createRef();
    }

    dragStart(e) {
        const {dragStart, sortId} = this.props;
        dragStart({
            event: e,
            sortId: sortId,
            element: this.dragRef,
            props: this.props,
            children: this.props.children
        });
    }

    render() {
        const {children} = this.props;
        return <div onMouseDown={this.dragStart} ref={this.dragRef}>
            {children}
        </div>
    }
}

export default SortDraggItem;
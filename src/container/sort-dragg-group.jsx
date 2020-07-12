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

        this.createSortItem = this.createSortItem.bind(this);

        this.state = {
            wrapperChild: null
        }

        this.offsetRef = React.createRef();
        this.offsetRefC = React.createRef();
        // this.reCreateRef();
        this.refsMap = {};
    }

    reCreateRef() {
        const {children} = this.props;
        children.map((item) => {
            let sid = item.props.sortId;
            let refKey = `${sid}_ref`;
            this[refKey] = React.createRef();
        });
    }


    componentWillReceiveProps() {
        
    }

    dragStart(data) {
        console.log(data);
        data.event.stopPropagation();
        data.event.preventDefault();
        window.addEventListener("mousemove", this.dragging);
        window.addEventListener("mouseup",this.endDrag);
        this.dragging(data.event);
        let allSortIds = this.getAllSortIds();
        this.dragIndex = allSortIds.indexOf(data.sortId);
        this.setState( {
            wrapperChild: <SortDraggItem sortId={data.sortId} props={{...data.props}} style={{opacity: 0.4}}>
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
        let allSortId = this.getAllSortIds();
        for(let i = 0; i < allSortId.length; i++) {
            let refKey = `${allSortId[i]}_ref`;
            let dragC = this.refsMap[refKey];
            dragC.style.borderTop = 'none';
            let currentRect = dragC.getClientRects()[0];
            if(Math.abs(pageY - currentRect.top) < 10) {
                dragC.style.borderTop = '4px solid white';
            } else {
                dragC.style.borderTop = 'none';
            }
        }

    }

    getAllSortIds() {
        const {children} = this.props;
        let res = [];
        children.map((item) => {
            res.push(item.props.sortId);
        });
        return res;
    }

    endDrag(e) {
        window.removeEventListener("mousemove", this.dragging);
        window.removeEventListener("mouseup",this.endDrag);
        this.offsetRef.current.style.left = 0 + "px";
        this.offsetRef.current.style.top = 0 + "px";

        this.setState( {
            wrapperChild: null
        });
        debugger;
        let findInsert = false;
        let beforeId = null;
        let allSortId = this.getAllSortIds();
        for(let i = 0; i < allSortId.length; i++) {
            let refKey = `${allSortId[i]}_ref`;
            let dragC = this.refsMap[refKey];
            dragC.style.borderTop = 'none';
            let currentRect = dragC.getClientRects()[0];
            if(Math.abs(e.pageY - currentRect.top) < 10) {
                console.log(allSortId[this.dragIndex] + '  inser before ' +  allSortId[i]);
                findInsert = true;
                beforeId = allSortId[i];
            }
        }
        if(findInsert) {
            const {sortChange} = this.props;
            let newIndex = allSortId.indexOf(beforeId);
            sortChange(allSortId[this.dragIndex], newIndex, this.dragIndex);
        }
    }

    createSortItem(target, id) {
        this.refsMap[`${id}_ref`] = target.current;
    }

    render() {
        const {children} = this.props;
        const {wrapperChild} = this.state;
        let self = this;
        return (<React.Fragment>
            <div className="sort-group-dragg-c" ref={this.offsetRefC}>
                <div className="sort-wrapper" ref={this.offsetRef}>
                    {wrapperChild}
                </div>
            </div>
            {children.map((item, index) => {
                let sid = item.props.sortId;
                // let refKey = `${sid}_ref`;
                return <SortDraggItem key={item.props.sortId} sortId={item.props.sortId}
                // ref={self[refKey]}
                dragStart={this.dragStart}
                dragging={this.dragging}
                endDrag={this.endDrag}
                emitSelf={this.createSortItem} >
                    {item}
                </SortDraggItem>
            })}
        </React.Fragment>);
    }
}

export default SortDraggGroup;
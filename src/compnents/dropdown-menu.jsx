import React from 'react';
import './style/dropdown-menu.css'

class DropdownMenu extends React.Component {
    constructor(props) {
        super(props);
        this.click = this.click.bind(this);
    }

    click(e, name) {
        e.stopPropagation();
        const {menuClick} = this.props;
        menuClick(name);
    }

    render() {
        const {menuList} = this.props;
        let borderObj = {borderBottom: '0.01rem solid gray'}
        return (<div className="drop-container">
            {menuList.map((item, index) => {
                return <div key={index} className="menu-item" onClick={(e) => this.click(e, item.name)} style={index < menuList.length - 1 ? borderObj : null}>{item.label}</div>
            })}
        </div>)
    }
}

export default DropdownMenu;
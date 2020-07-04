import React from 'react';
import DropdownMenu from './dropdown-menu';
import './style/dropdown.css'

class Dropdown extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            showDropDown: false
        }

        this.menuClick = this.menuClick.bind(this);
        this.btnClick = this.btnClick.bind(this);
        this.toggle = this.toggle.bind(this);
        this.showMenu = this.showMenu.bind(this);
        this.hideMenu = this.hideMenu.bind(this);
    }

    menuClick(name) {
        this.setState({showDropDown: false});
        this.props.toobarMenuClick(name);
    }

    btnClick(e) {
        const {toobarClick, idName} = this.props;
        toobarClick(idName);
        debugger;
        
    }

    toggle() {
        this.setState({showDropDown: !this.state.showDropDown});
    }

    hideMenu() {
        this.setState({showDropDown: false});
    }

    showMenu() {
        this.setState({showDropDown: true}); 
    }

    render() {
        const {label, dropdownMenu} = this.props;
        const {showDropDown} = this.state;
        return (<span className="cogi-drop-btn" onClick={this.btnClick}> {label}
                    <div className="menu-container">
                        {showDropDown ? <DropdownMenu 
                            menuClick={this.menuClick}
                            menuList= {dropdownMenu}
                        /> : null}
                    </div> 
                </span>)
    }
}


export default Dropdown;
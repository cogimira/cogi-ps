import React from 'react';
import PropTypes from 'prop-types';

class Dropdown extends React.PureComponent {
    constructor(props){
        super(props);
    }

    render() {
        const {lists, itemClick} = this.props;
        return (
            <React.Fragment>
                {lists.map((item) => {
                    <div className="dropdown-item" onClick={() => {itemClick(item.name)}}>
                        {item.lable}
                    </div>
                })}
            </React.Fragment>
        )
    }
}


export default Dropdown;
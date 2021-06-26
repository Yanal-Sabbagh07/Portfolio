import React from 'react';

const ListItem = (props) => {
    return (
        <div className="item"  >
            <img src={props.img} alt="" />
            <h3>{props.name}</h3>
            <p></p>
        </div>
    );
}

export default ListItem;

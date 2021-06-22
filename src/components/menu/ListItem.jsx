import React from 'react';

const ListItem = (props) => {
    const handeleClick = () => {
        return(props.setMenu(false));
    }
    return (
        <div>
            <li onClick={handeleClick}>
                    <a href="#intro">Home</a>
            </li>
            <li onClick={handeleClick}>
                    <a href="#portfolio">Portfolio</a>
            </li>
            <li onClick={handeleClick}>
                    <a href="#skills">Skills</a>
            </li>
            <li onClick={handeleClick}>
                    <a href="#contact">Contact</a>
            </li>
        </div>
    );
}

export default ListItem;

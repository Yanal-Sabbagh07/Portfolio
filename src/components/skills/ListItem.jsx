import React from "react";

const ListItem = (props) => {
  return (
    <div className="item-container">
      <div className="item">
        <img src={require(`../../assets/${props.img}`)} alt="img" />
        <h3>{props.name}</h3>
        <p></p>
      </div>
    </div>
  );
};

export default ListItem;

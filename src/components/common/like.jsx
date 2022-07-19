import React from "react";

const Like = (props) => {
  let classes = "fa-heart fa-";
  if (props.liked) {
    classes += "solid";
  } else {
    classes += "regular";
  }
  return (
    <i
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
      className={classes}
    />
  );
};

export default Like;

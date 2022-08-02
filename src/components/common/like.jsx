import React from "react";

const Like = (props) => {
  let classes = "clickable fa-heart fa-";
  if (props.liked) {
    classes += "solid";
  } else {
    classes += "regular";
  }
  return <i onClick={props.onClick} className={classes} />;
};

export default Like;

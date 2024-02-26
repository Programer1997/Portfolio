import React from "react";

export default function GalleryExperience(props) {
  //const { imgUrl, size } = props;
  return (
    <>
      {
        <img
          src={props.imgUrl}
          alt="something is wrong"
          className={props.size === "big" ? "bigImage" : ""}
        />
      }
    </>
  );
}

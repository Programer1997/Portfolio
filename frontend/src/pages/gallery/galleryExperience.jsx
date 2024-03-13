import React from "react";

export default function GalleryExperience(props) {
  //const { imgUrl, size } = props;
  return (
    <>
      {
        <div className="galleryItem">
          <img
            src={props.imgUrl}
            alt="something is wrong"
            className={props.size === "big" ? "bigImage" : ""}
          />
          <h3 className="galleryTitle">{`Imagen ${props.index}`}</h3>
        </div>
      }
    </>
  );
}

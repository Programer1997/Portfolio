import React from "react";

export default function homeWorkExperience(props) {
  return (
    <>
      <img src={props.imgUrl} alt="something is wrong" />
      <div className="workExamplesText">
        <div className="workExamplesTextDiv">
          <h1>{props.title}</h1>
          <p>{props.description}</p>
        </div>
        <button>More</button>
      </div>
    </>
  );
}

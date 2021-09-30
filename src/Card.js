// import React, { Component } from "react";

const Card = (props) => {
  const fnGetImgSec = () => {
    return "https://robohash.org/" + props.imglnk + "?size=200x200";
  };
  return (
    <div className="bg-light-green tc dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={fnGetImgSec()} alt="Robot" />
      <div>
        <h2>{props.name}</h2>
        <p>{props.email}</p>
      </div>
    </div>
  );
};

export default Card;

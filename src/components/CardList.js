import React from "react";
import Card from "./Card";

const CardList = (props) => {
  return props.myPeople.map((item, i) => (
    <Card
      key={i}
      ki
      id={item.id}
      name={item.name}
      email={item.email}
      imglnk={item.username}
    />
  ));
};

export default CardList;

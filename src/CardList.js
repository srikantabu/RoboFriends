import React from "react";
import Card from "./Card";

let oPeople = [
  {
    id: 1,
    name: "Srikanta B U",
    email: "busrikanta@gmail.com",
    img: "Srikanta",
  },
  {
    id: 2,
    name: "Umesha S",
    email: "umeshas@gmail.com",
    img: "Umesha",
  },
  {
    id: 3,
    name: "Arathi S",
    email: "arathis@gmail.com",
    img: "Arathi",
  },
  {
    id: 4,
    name: "Subhash B U",
    email: "SubhashBU@gmail.com",
    img: "Subhash",
  },
  {
    id: 5,
    name: "Swaroop Vel",
    email: "SwaroopVel@gmail.com",
    img: "Swaroop",
  },
];

const CardList = () => {
  return oPeople.map((item) => (
    <Card id={item.id} name={item.name} email={item.email} imglnk={item.img} />
  ));
};

export default CardList;

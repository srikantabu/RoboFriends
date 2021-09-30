import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Card from "./Card";
import reportWebVitals from "./reportWebVitals";
import "tachyons";

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

ReactDOM.render(
  <React.Fragment>
    {oPeople.map((item) => (
      <Card
        id={item.id}
        name={item.name}
        email={item.email}
        imglnk={item.img}
      />
    ))}
  </React.Fragment>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

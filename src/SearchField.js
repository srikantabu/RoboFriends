import React, { useState } from "react";

const SearchField = (props) => {
  const [enteredValue, setEnteredValue] = useState("");

  const readName = (event) => {
    setEnteredValue(event.target.value);

    props.onUpdate(event.target.value);
  };

  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="text"
        id="name"
        name="name"
        onChange={readName}
        value={enteredValue}
      ></input>
    </div>
  );
};

export default SearchField;

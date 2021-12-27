import React, { useState, useEffect } from "react";

export default function Cat() {
  const [cat, setCat] = useState({});
  useEffect(() => {
    alert("Hello this is initialization");
  }, [cat]);
  const holdInputValue = (event) => {
    cat[event.target.name] = event.target.value;
  };

  const onClickFun = () => {
    setCat({ ...cat });
  };

  return (
    <div>
      Cat Name:
      <input name="name" type="text" onChange={holdInputValue}></input>
      <br />
      Cat Age:
      <input name="age" type="number" onChange={holdInputValue}></input>
      <br />
      Cat Color:
      <input name="color" type="text" onChange={holdInputValue}></input>
      <br />
      Cat Gender:
      <input name="gender" type="text" onChange={holdInputValue}></input>
      <br />
      <button type="button" onClick={onClickFun}>
        Send
      </button>
    </div>
  );
}

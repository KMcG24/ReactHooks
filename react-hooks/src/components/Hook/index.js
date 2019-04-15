import React, { useState, useEffect } from "react";

function NameInput() {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = name;
  });

  function handleNameChange(e) {
    setName(e.target.value);
  }

  return (
    <>
      <input
        type="text"
        style={{ height: "100px", fontSize: "75px" }}
        value={name}
        onChange={handleNameChange}
      />
      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <p>Click to Increment / Decrement {count} </p>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
    </>
  );
}

export default NameInput;

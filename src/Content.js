import React, { useState } from "react";

const Content = () => {
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("hi");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <br />
        <button type="submit">Click</button>
        <p>{message}</p>
      </form>
    </div>
  );
};

export default Content;

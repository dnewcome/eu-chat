import React, { useState } from "react";

function Edit(props) {
  const [bodyText, setBodyText] = useState("");
  return (
    <div style={{width: '400px'}}>
      <p>Hi, what is your name?</p>
      <form>
      <input
        style={{
          outline: "none",
          marginTop: "20px",
          display: "block",
          border: "none",
          borderRadius: "10px",
          width: "100%",
          height: "50px",
          fontSize: "calc(10px + 2vmin)",
          padding: "10px",
          boxSizing: "border-box"
        }}
        value={bodyText}
        onChange={ev => {
          setBodyText(ev.target.value);
          console.log(bodyText);
        }}
        name="body"
        type="text"
      ></input>
      <input
        style={{
          width: "100%",
          outline: "none",
          marginTop: "20px",
          display: "block",
          backgroundColor: "green",
          border: "none",
          color: "white",
          borderRadius: "10px",
          height: "50px",
          fontSize: "calc(10px + 2vmin)"
        }}
        onClick={() => {
          props.callback(bodyText);
        }}
        type="submit"
        value="Get started"
      ></input>
      </form>
    </div>
  );
}

export default Edit;

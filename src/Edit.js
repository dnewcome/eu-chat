import React, { useState } from "react";

function Edit(props) {
  const onSend = () => {
    props.onSend(bodyText);
    setBodyText("");
  };
  const [bodyText, setBodyText] = useState("");
  return (
    <div>
      <textarea
        placeholder={`Speak your piece ${props.userName}!`}
        style={{
          resize: "none",
          outline: "none",
          borderRadius: "10px",
          width: "400px",
          padding: "10px",
          fontSize: "calc(10px + 2vmin)"
        }}
        value={bodyText}
        onChange={ev => {
          setBodyText(ev.target.value);
        }}
        name="body"
        type="text"
      ></textarea>
      <button
        style={{
          outline: "none",
          marginTop: "20px",
          display: "block",
          backgroundColor: "green",
          border: "none",
          color: "white",
          borderRadius: "10px",
          width: "100%",
          height: "50px",
          fontSize: "calc(10px + 2vmin)"
        }}
        onClick={onSend}
        type="submit"
      >
        Send
      </button>
    </div>
  );
}

export default Edit;

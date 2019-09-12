import React, { useEffect, useState } from "react";
import sha1 from "sha1";
import bc from "base-converter";
import History from "./History";
import Edit from "./Edit";
import { Message } from "./types";

const ws = new WebSocket("ws://127.0.0.1:4001");

const constructMessage = (userName: string, bodyText: string): Message => {
  const timeStamp = new Date();
  const id = sha1(timeStamp.getTime() + userName + bodyText);
  return {
    userName,
    id: bc.decTo62(bc.hexToDec(id)),
    timeStamp: new Date(),
    bodyText
  };
};

function Main(props: { userName: string; logoutCallback: () => void }) {
  const [messages, setMessages]: [Array<Message>, Function] = useState([]);
  useEffect(() => {
    ws.onmessage = event => {
      const { userName, bodyText } = JSON.parse(event.data);
      console.log(event.data);
      setMessages([...messages, constructMessage(userName, bodyText)]);
    };
  });
  return (
    <div className="App">
      <header className="App-header">
        <History userName={props.userName} items={messages}></History>
        <Edit
          userName={props.userName}
          onSend={(bodyText: string) => {
            if (bodyText) {
              ws.send(JSON.stringify({ userName: props.userName, bodyText }));
            }
          }}
        ></Edit>
        <button
          style={{
            marginTop: "50px",
            height: "50px",
            width: "100px",
            borderRadius: "10px",
            backgroundColor: "#ACF",
            color: "white",
            fontSize: "calc(10px + 1.25vmin)"
          }}
          type="submit"
          onClick={props.logoutCallback}
        >
          Log out
        </button>
      </header>
    </div>
  );
}

export default Main;

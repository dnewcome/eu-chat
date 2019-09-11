import React from "react";
import Main from "./Main";
import Login from "./Login";
import "./App.css";
import { useCookie } from "@use-hook/use-cookie";

function App() {
  const [userName, setName] = useCookie("eu-chat-name");

  return (
    <div className="App">
      <header className="App-header">
        {userName ? (
          <Main
            userName={userName}
            logoutCallback={() => {
              setName('');
            }}
          ></Main>
        ) : (
          <Login
            callback={(name: string) => {
              console.log(`setting name to ${name}`);
              setName(name, { expires: 0.1 });
            }}
          ></Login>
        )}
      </header>
    </div>
  );
}

export default App;

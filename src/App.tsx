import React from 'react';
import Main from './Main'
import Login from './Login'
import './App.css';
import { Message } from './types';
import { useCookie } from "@use-hook/use-cookie";

let data: Array<Message> = [
  {userName: 'dan', id: '2HUoNcA8owoomGuUyaqm2i', timeStamp: new Date('2019-09-01'), bodyText: 'Hi this is Dan'},
  {userName: 'dan', id: '7jMsz8ijUAE6sCQmiC80Sa', timeStamp: new Date('2019-09-02'), bodyText: 'Hi this is Steve'}
];

function App() {
  const [userName, setName] = useCookie("eu-chat-name");

  return (
    <div className="App">
      <header className="App-header">
          {(userName ? <Main logoutCallback={() => {setName(null)}} items={data}></Main> :
          <Login callback={(name: string) => {console.log(`setting name to ${name}`); setName(name, {expires: 0.1})}}></Login>)}
      </header>
    </div>
  );
}

export default App;

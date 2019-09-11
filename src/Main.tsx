import React, {useEffect, useState} from 'react';
import History from './History'
import Edit from './Edit'
import { Message } from './types'

const ws = new WebSocket('ws://127.0.0.1:4001');

const constructMessage = (bodyText: string): Message => {
  return {userName: 'dan', id: '3vfqOjhc0wGsyEYSU6CCks', timeStamp: new Date(), bodyText};
};



function Main(props: {logoutCallback: ()=>void}) {
  const [messages, setMessages] = useState([
    {userName: 'dan', id: '2HUoNcA8owoomGuUyaqm2i', timeStamp: new Date('2019-09-01'), bodyText: 'Hi this is Dan'},
    {userName: 'dan', id: '7jMsz8ijUAE6sCQmiC80Sa', timeStamp: new Date('2019-09-02'), bodyText: 'Hi this is Steve'}
  ]);
  useEffect(() => {
    // ws.onopen = () => {ws.send('yes');};
    ws.onmessage = (event) => {
      setMessages([...messages, constructMessage(event.data)]); console.log(messages);
    };
  }, []);
  return (
    <div className="App">
      <header className="App-header">
          <History items={messages}></History> 
          <Edit onSend={(bodyText: string)=>{ws.send(bodyText)}}></Edit> 
          <button type="submit" onClick={props.logoutCallback}>Log out</button>
      </header>
    </div>
  );
}

export default Main;

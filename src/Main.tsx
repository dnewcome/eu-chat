import React, {useEffect} from 'react';
import History from './History'
import Edit from './Edit'
import { Message } from './types'

const ws = new WebSocket('ws://127.0.0.1:4001');
ws.onopen = () => {ws.send('yes');};

const constructMessage = (bodyText: string): Message => {
  return {userName: 'dan', id: '3vfqOjhc0wGsyEYSU6CCks', timeStamp: new Date(), bodyText};
};

function Main(props: {items: Array<Message>, logoutCallback: ()=>void}) {
  useEffect(() => {console.log('mounted');}, []);
  return (
    <div className="App">
      <header className="App-header">
          <History items={props.items}></History> 
          <Edit onSend={(bodyText: string)=>{props.items.push(constructMessage(bodyText))}}></Edit> 
          <button type="submit" onClick={props.logoutCallback}>Log out</button>
      </header>
    </div>
  );
}

export default Main;

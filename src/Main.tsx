import React from 'react';
import History from './History'
import Edit from './Edit'
import { Message } from './types'

const constructMessage = (bodyText: string): Message => {
  return {userName: 'dan', id: '3vfqOjhc0wGsyEYSU6CCks', timeStamp: new Date(), bodyText};
};

function Main(props: {items: Array<Message>, logoutCallback: ()=>void}) {
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

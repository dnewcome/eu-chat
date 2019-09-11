import React from 'react';
import Main from './Main'
import './App.css';
import { Message } from './types'

let data: Array<Message> = [
  {userName: 'dan', id: '2HUoNcA8owoomGuUyaqm2i', timeStamp: new Date('2019-09-01'), bodyText: 'Hi this is Dan'},
  {userName: 'dan', id: '7jMsz8ijUAE6sCQmiC80Sa', timeStamp: new Date('2019-09-02'), bodyText: 'Hi this is Steve'}
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Main items={data}></Main>
      </header>
    </div>
  );
}

export default App;

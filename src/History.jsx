import React from 'react';

export default function History(props) {
  return (
    <div>
      {props.items.map((item, i)=>{return (
        <div style={{margin: '20px', width: '400px', display: 'flex', justifyContent: 'space-between', flexDirection: (item.userName === props.userName) ? 'row-reverse' : 'row'}} key={`history-item-${i}`}>
          <img title={props.userName} alt="avatar" style={{width: '40px', height: '40px', borderRadius: '50%'}} src={`https://ui-avatars.com/api/?name=${item.userName}`}></img>
          <div style={{width: '300px', textAlign: 'left'}}>{item.bodyText}</div>
        </div>
      )})}
    </div>
  );
}

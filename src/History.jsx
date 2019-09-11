import React from 'react';

export default function History(props) {
  return (
    <div>
      {props.items.map((item, i)=>{return (<div key={`history-item-${i}`}>{item.bodyText}</div>)})}
    </div>
  );
}

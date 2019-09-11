import React, {useState} from 'react';

function Edit(props) {
  const [bodyText, setBodyText] = useState('');
  return (<div>
    <p>Hi, what is your name?</p>
    <input value={bodyText} onChange={(ev)=>{setBodyText(ev.target.value); console.log(bodyText);}} name="body" type="text"></input>
    <input onClick={() => {props.callback(bodyText)}} type="submit"></input>
  </div>);
}

export default Edit;
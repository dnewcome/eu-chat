import React, {useState} from 'react';

function Edit(props) {
  const onSend = () => {props.onSend(bodyText)};
  const [bodyText, setBodyText] = useState('');
  return (<div>
    <input value={bodyText} onChange={(ev)=>{setBodyText(ev.target.value); console.log(bodyText);}} name="body" type="text"></input>
    <button onClick={onSend} type="submit">Send</button>
  </div>);
}

export default Edit;
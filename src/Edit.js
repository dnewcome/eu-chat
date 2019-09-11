import React, {useState} from 'react';

function Edit(props) {
  const onSend = () => {console.log('send');};
  const [bodyText, setBodyText] = useState('');
  return (<div>
    <input value={bodyText} onChange={(ev)=>{setBodyText(ev.target.value); console.log(bodyText);}} name="body" type="text"></input>
    <input onClick={onSend} type="submit"></input>
  </div>);
}

export default Edit;
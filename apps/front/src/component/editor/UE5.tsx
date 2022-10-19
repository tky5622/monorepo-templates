import { load } from '@standiart/pixel-streaming-editor';
import React from 'react';
const UE5: React.FC = () => {
  React.useEffect(() => {
  // Your code here
  load();
}, []);
  return (<div id='ue4'/>)
}

export default UE5
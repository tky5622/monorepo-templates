// import { load } from '@standiart/my-lib';
import React from 'react';
import { load } from '../../../share/app';
import EditorTemplate from '../../../share/editorPage/EditorTemplate';
const UE5: React.FC = () => {
  React.useEffect(() => {
  // Your code here
  load();
}, []);
  return (<EditorTemplate/>)
}

export default UE5
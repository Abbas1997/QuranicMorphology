import React, { useState, useRef } from 'react';
import { ScrollView } from 'react-native';
import getData from './Components/getData';
import SelectionMenu from './Components/SelectionMenu';

const App = () => {

  const[cvno, set_cvno] = useState([1,1,0])
  const sRef = useRef(null)

  return (
    <ScrollView
      stickyHeaderIndices={[0]}
      ref = {sRef}
    >
      <SelectionMenu key={'u1'} cvno={cvno} set_cvno={set_cvno}/>
      {getData(sRef, cvno, set_cvno)}
    </ScrollView>
  );
};

export default App;


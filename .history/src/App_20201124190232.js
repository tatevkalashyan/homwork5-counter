// import logo from './logo.svg';
// import './App.css';

import { Fragment } from 'react';
import Calc from './Calc/Calc'
// import List from './List'

function App() {
  const colors = ['green', 'orange', 'yellow', 'red']
  return (
  <Fragment>
    <Calc />
     <List colors={colors} />
   {  for(let i in colors) {
      console.log(item)}}
    </Fragment>
    
   
    
  }
 
  );
}

export default App;

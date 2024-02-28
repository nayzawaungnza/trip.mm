import { useEffect, useState } from 'react';
import './App.css';
import Triplist from './components/Triplist/index'


function App() {

  let [show, setShow] = useState(true);

  useEffect(()=>{
    console.log('using render');
  },[])

  return (
    <>
      <button onClick={()=>setShow(false)}>hide trips</button>
      {show &&
        <Triplist></Triplist>
      }
    </>
  );
}

export default App;

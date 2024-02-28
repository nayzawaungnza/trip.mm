import { useEffect, useState } from 'react';
import './App.css';
import Triplist from './components/Triplist/index'


function App() {

  let [show, setShow] = useState(true);

  let [data, setData] = useState('my data');
  let myFunction = () =>{
    setData('update data');//render -> stop
  }
  useEffect(()=>{
    myFunction()
    console.log('runing render');
    
  },[myFunction])

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

// data - my data
//data - 'update data' -> render

//setter function is not alway infinite loop. (when set data  is same data)


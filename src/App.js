
import './App.css';
import {useState} from 'react'
import Greeting from './Components/Greeting';

function App() {
  const [count, setCount] = useState(0);
  const onButtonClick = (op) => {
    if(op==='add'){

      setCount(prevState=>prevState+1);
    }else{
      setCount(prevState=>prevState-1);
    }
  }
  return (
    <div className="App">
     <Greeting/>
     <p>Counter</p>
      <p>{count}</p>
      <button onClick={()=>onButtonClick('add')}>Increment</button>
      <button onClick={()=>onButtonClick('sub')}>Decrement</button>
    </div>
  );
}

export default App;

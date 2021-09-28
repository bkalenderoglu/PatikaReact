import logo from './logo.svg';
import './App.css';
import { useState, useMemo } from 'react'
import Header from './components/Header';

function App() {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");
  const data = useMemo(() => {
    return getObject(number);
  }, [number]);

  // const data = getObject();

  return (
    <div className="App">
      <Header number={number < 5 ? 0 : number} data={data} />

      <hr />

      <h1>{number}</h1>
      <button onClick = {() => setNumber(number + 1)}>Click</button>
 
      <br />
      <br />

      <input type={text} onChange={({target}) => setText(target.value)} />

    </div>
  );
}

function getObject(number){
  console.log("Calculating");
  for(let i=0; i < 10000000; i++ ) {}
  console.log("Completed");
  return { name:"Beyza", number };
}

export default App;

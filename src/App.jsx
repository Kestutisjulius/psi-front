import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [labas, setLabas] = useState('');

  useEffect(()=>{
    axios.get('http://psi.back/second')
    .then(res => {
      setLabas(res.data.message);
    })
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {labas}
        </p>
        <a
          className="App-link"
          href="http://psi.back/second"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

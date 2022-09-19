import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from './Components/Nav';
import Main from './Components/Main';

function App() {
  const [labas, setLabas] = useState('');

  useEffect(() => {
    axios.get('http://psi.back/second')
      .then(res => {
        setLabas(res.data.message);
      })
  }, []);

  return (
    <div className="App">

      <Nav />
      <Main />
      <p>
        {labas}
      </p>



    </div>
  );
}

export default App;

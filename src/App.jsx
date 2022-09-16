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
      
        <Nav />
      <Main />
        <p>
          {labas}
        </p>
      
      

    </div>
  );
}

export default App;

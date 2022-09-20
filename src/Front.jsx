import { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from './Components/Nav';
import Main from './Components/Main';
import RegPage from './Components/RegPage';

function Front({ show }) {
  const [labas, setLabas] = useState('');

  useEffect(() => {
    axios.get('http://psi.back/second')
      .then(res => {
        setLabas(res.data.message);
      })
  }, []);

  return (
    <div>
      {show === 'welcome' ? (
        <>
          <Nav />
          <Main />
          <p>
            {labas}
          </p>
        </>
      ) : show === 'register' ?
        <RegPage /> : null
      }
    </div>
  )
}

export default Front;
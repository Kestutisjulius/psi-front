import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Front from './Front';
import RegPage from './Components/RegPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register'
          element={<RegPage show='register' />}
        />
        <Route path='/login'
        // element={<LoginPage />} 
        />
        <Route path='/logout'
        //element={<LogoutPage />} 
        />
        <Route
          path='/'
          element={
            <Front show='welcome' />
          }
        />
        <Route
          path='/admin'
        // element={
        //   <RequireAuth role='admin'>
        //     <Back show='admin' />
        //   </RequireAuth>
        // }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

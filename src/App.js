
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import {ToastContainer} from 'react-toastify';


function App() {
  return (

      <div className="App">
        <ToastContainer theme='colored'></ToastContainer>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Signup' element={<Signup />} />
        </Routes>
     
      </div>
    

  );
}

export default App;

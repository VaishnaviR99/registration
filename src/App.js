
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './component/Home';
import Login from './component/Login';
import Signup from './component/Signup';
import {ToastContainer} from 'react-toastify';


function App() {
  return (

      <div className="App">
        <ToastContainer theme='colored'></ToastContainer>
        <Routes>
          <Route path='/' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />} />
        </Routes>
     
      </div>
    

  );
}

export default App;

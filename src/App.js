import './App.css';
import Login from './Pages/Login';
import {Route, Routes} from 'react-router-dom'
import Ca from './Pages/create account'



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Create-Account' element={<Ca/>}/>
      </Routes>
    </div>
  );
}

export default App;

import './App.css';
import { Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Menu from './Components/Pages/Menu';
import Home from './Components/Pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element ={<Home/>}/>  
        <Route path='/menu' element={<Menu/>}/>
      </Routes>
  
    </div>
  );
}

export default App;

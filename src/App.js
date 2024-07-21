
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Welcome } from './components/Welcome';
import { Login } from './components/Login';
import { Register } from './components/Register';
// import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Settings } from './components/Settings';


function App() {
  return (
    <div className="App">
      
     <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      {/* <Route path="/navbar" element={<Navbar/>}/> */}
      <Route path="/home" element={<Home/>}/>
      <Route path='/settings'element={<Settings/>}/>
      
      </Routes>
    </Router>
   
    </div>
  );
}

export default App;

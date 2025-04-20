

import {BrowserRouter, Routes, Route} from "react-router-dom"
// import Home from './Home';
import About from './About';
import All from './All';
import Project from "./Project";
import Contact from "./Contact";
import './App.css'
// import CustomCursor from "./CustomCursor";

function App() {
  return (
    <BrowserRouter>
    {/* <CustomCursor/> */}
    <Routes>
      <Route element={<All/>} path='/'/>
      <Route element={<About/>} path='/about'/>
      <Route element={<Project/>} path='/projects'/>
      <Route element={<Contact/>} path='/contact'/>
      
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
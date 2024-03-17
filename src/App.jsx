import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './Component/Navbar'
import Contact from './Contact/Contact'
import About from './About/About'
import Project from './Phoject/Project'
import Home from './Home/Home'
import Stopwatch from './proj/Stopwatch'
import Landing from './FrontP/Landing'

function App() {

  return (
    <>
       <BrowserRouter>
      {/* <Navbar/> */}
      <Routes>
        // <Route path='/' element={ <Landing/> } />
        <Route path='/project' element={<Project/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
       </BrowserRouter> 

      {/* <CardSlider/> */}


    </>
  )
}

export default App

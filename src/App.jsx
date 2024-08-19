import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Heading from './Heading';
import Footing from './Footing';
import Landing from './Landing';
import MainPage from './MainPage';
import ViewerPage from './ViewerPage';

function App() {
 

  return (
    <>
         <Router>
          <section id='Home'><Heading/></section>
         
        
          <Routes>
          
          <Route  path="/MainPage" element={<MainPage/>}/>
          <Route  path="/ViewerPage" element={<ViewerPage/>}/>

          <Route  path="*"  element={
            <>
                <section id='Home'><Landing/></section>
            </>
          }/>
          </Routes>
          <section id=''><Footing/></section>
         </Router>
    </>
  )
}

export default App

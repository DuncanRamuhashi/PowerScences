import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Heading from './Heading';
import Footing from './Footing';
import Landing from './Landing';
import MainPage from './MainPage';
import ViewerPage from './ViewerPage';
import About from './About';
import SeriesPage from './SeriesPage';

 // this is for getting music

//my key :  871ff18874f5530228c9d12e917d83bf 

// refer : https://developer.themoviedb.org/reference/intro/getting-started

function App() {

// <section id='Home'><Heading/></section>
  return (
    <>
         <Router>
         <section  id='Home'><Heading/></section>
         
        
          <Routes>
          <Route  path="/About" element={<About/>}/>
          <Route  path="/MoviePage" element={<MainPage/>}/>
          <Route  path="/SeriesPage" element={<SeriesPage/>}/>
          <Route  path="/ViewerPage/:id/:type" element={<ViewerPage/>}/>

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

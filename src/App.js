import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from 'react'
import CustomHeader from './components/Header/Header'
import CustomNavbar from './components/Header/Navbar';
import CustomHero from './components/Heroes/Customhero';
import Customfeatures from './components/Features/Customfeatures';
import NoPage from './components/Nopage.js/Nopage';
import CustomFeatures2 from './components/Features/CustomFeatures2';
import CustomFooter from './components/Footer/CustomFooter';
import About from './components/About/About';
import CustomTools from './components/Masonry/Masonry';
import Quotes from './components/Masonry/Masonry';
export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CustomNavbar />}>
          <Route index element={<CustomHeader />} />
          <Route path="skills" element={<Customfeatures />} />
          <Route path="projects" element={<CustomHero />} />
          
          <Route path="education" element={<CustomFeatures2/>} />
          <Route path="footer" element={<CustomFooter/>} />
          <Route path="about" element={<About/>} />
          <Route path="quotes" element={<Quotes/>}/>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
      {/* <CustomNavbar/> */}
      {/* <CustomHeader/> */}
      <CustomHero/>
      <Customfeatures/>
      <CustomFeatures2/>
      <About/>
      <CustomTools/>
      <CustomFooter/>
    </>
  )
}

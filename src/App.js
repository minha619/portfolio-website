import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [categories] = useState([
    { name: 'projects', description: 'Project Lists'}
  ]);

  const [currentCategory] = useState(categories[0]);

  return (
    <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Projects currentCategory={currentCategory}> </Projects>} />
        <Route path="portfolio/" element={<Projects currentCategory={currentCategory}> </Projects>} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects currentCategory={currentCategory}> </Projects>} />
      </Routes>
    </BrowserRouter >

  );
}



export default App;

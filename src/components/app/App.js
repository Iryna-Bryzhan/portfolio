import React from 'react';
import './App.css';
import Menu from '../menu/menu';
import ScreenMain from '../screenMain/screenMain';
import About from '../about/about';
import Skills from '../skills/skills';
import Portfolio from '../portfolio/portfolio';
import Contact from '../contact/contact';
import Footer from '../footer/footer';
import 'animate.css';

function App() {
  return (
    <div className="app">
    <Menu></Menu>
    
    <div className='container'>
      <ScreenMain></ScreenMain>
      <About> </About>
      </div>
       <Skills></Skills>
      <div className='container'>
     
      <Portfolio></Portfolio>
      </div>
      <Contact></Contact>
    
    <Footer></Footer>
    </div>
  );
}


export default App;

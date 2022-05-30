import React from 'react';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import Catalog from './components/Catalog/Catalog';
import CandlesInfo from './components/Catalog/CandlesInfo/CandlesInfo';
import Quest from './components/Quest/Quest';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import './App.css';

export default function App (props) {
    return (
        <div className='container'>
          <Navbar/>
            <div className='wrap-container'>
              <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/catalog' element={<Catalog/>}/>
                <Route path="/candlesinfo" element={<CandlesInfo />} />
                <Route path='/quest' element={<Quest/>}/>
                <Route path='/contact' element={<Contact/>}/>
              </Routes>
            </div>
          <Footer/>
        </div>
  );
}


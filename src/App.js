import React from 'react';
import daredevil from './daredevil-cover.jpg'
import mentalist from './mentalist-cover.jpg'
import earl from './earl-cover.jpg'
import shameless from './shameless-cover.jpg'
import vikings from './vikings-cover.jpg'
import supernatural from './supernatural-cover.jpg'
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <div className='item'>
         <img src={daredevil} alt="Daredevil"/>
        </div>
        <div className='item'>
         <img src={mentalist} alt="The Mentalist"/>
        </div>
        <div className='item'>
         <img src={earl} alt="My name is earl"/>
        </div>
      </div>

      <div className='container'>
        <div className='item'>
         <img src={shameless} alt="Shameless"/>
        </div>
        <div className='item'>
         <img src={vikings} alt="Vikings"/>
        </div>
        <div className='item'>
         <img src={supernatural} alt="Supernatural"/>
        </div>
      </div>
    </div>
  );
}

export default App;

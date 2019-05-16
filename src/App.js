import React from 'react';
import './App.css';

function App() {
  return (
    <div className='App'>
          <img src={daredevil} alt="Logo" />
      <div className='container'>
        <div className='item'>Daredevil</div>
        <div className='item'>The Mentalist</div>
        <div className='item'>My name is earl</div>
      </div>
      <div className='container'>
        <div className='item'>Shameless</div>
        <div className='item'>Vikings</div>
       <div className='item'>Supernatural</div>
      </div>
    </div>
  );
}

export default App;

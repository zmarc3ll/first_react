import React from 'react';
import logo from './logo.svg';
import './App.css';
import Szinvalto from './Szinvalto';

function App() {
  return (
   <div className='App'>
      <Szinvalto 
      text="Ide jön a lorem ipsum szöveg"
      count = 5
      />
   </div>
  );
}

export default App;

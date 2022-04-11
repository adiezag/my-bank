import logo from './logo.svg';
import './App.css';
import Clock from './components/Clock';
import Greeting  from './components/Greeting';
import Credits from './components/Credits';
import Debits from './components/Debits';
import React,{useState} from 'react'

function App() {
  return (
    
    <body>
      <div>
       <Clock/>
      </div>
      
      <div>
        <Greeting/>
      </div>
      
      <div>
        <Credits/>
      </div>
      
      <div>
        <Debits/>
      </div>
      
    </body>
  );
}

export default App;

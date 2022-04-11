import logo from './logo.svg';
import './App.css';
import Clock from './components/Clock';
import Greeting  from './components/Greeting';
import Credits from './components/Credits';
import Debits from './components/Debits';
import React,{useState} from 'react'


function App() {
  const [showDebits, setShowDebits] = useState(false)
  const [showCredits, setShowCredits] = useState(false)

  return (
    
    <body>
      <div>
       <Clock/>
      </div>
      
      <div>
        <Greeting/>
      </div>
      <div className = "Debits">
        {
          showDebits? <Debits/>: null
          
        }
     
        <button onClick={()=>setShowDebits(true)}>Show debits</button>
        <button onClick={()=>setShowDebits(false)}>Hide debits</button>

      </div>


      <div className = "Credits">
        {
          showCredits? <Credits/> :null
          
        }
     
        <button onClick={()=>setShowCredits(true)}>Show credits</button>
        <button onClick={()=>setShowCredits(false)}>Hide credits</button>
   
      </div>
      

      
    </body>
  );
}

export default App;

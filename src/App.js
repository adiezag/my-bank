import logo from './logo.svg';
import './App.css';
import Clock from './components/Clock';
import Greeting  from './components/Greeting';
import Credits from './components/Credits';
import Debits from './components/Debits';
import React,{useState} from 'react'


function App() {
  const [showTransactions, setShowTransactions] = useState(false)
  

  return (

    <body>
      <div>
       <Clock/>
      </div>
      
      <div>
        <Greeting/>
      </div>

      
      
      {
        showTransactions?
        <div className = "Debits">
          <h3>Debits</h3>
          <Debits/>
        </div>
        :

        <div className = "Credits">
          <h3>Credits</h3>
          <Credits/>
        </div> 
      
      }

      <button onClick={()=>setShowTransactions(true)}>Debits</button>
      <button onClick={()=>setShowTransactions(false)}>Credits</button>
     
        

 
      

      
    </body>
  );
}

export default App;

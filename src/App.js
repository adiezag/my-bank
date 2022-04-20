import logo from './logo.svg';
import './App.css';
import Clock from './components/Clock';
import React,{Component, useState} from 'react'
import Form from './components/Form';
import Transaction from './components/Transaction';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      user: "Professor",
      hexBg : '',
      hexTC : '',
      showlist : false,
      show: true

    }
  }

  changeUser = (e) => {
    e.preventDefault();
    const currUser = e.target[0].value;
    const hB = e.target[1].value;
    const hT = e.target[2].value;
    
    this.setState({user: currUser})
    this.setState({hexBg: hB})
    this.setState({hexTC: hT})
    this.setState({show:!this.state.show})
  }

  handleToggleClick = () => {  
    this.setState({showlist : !this.state.showlist})
  }

  render() {
    return (
      <div style = {{backgroundColor:this.state.hexBg, color:this.state.hexTC}}>
        <Clock user = {this.state.user}/>
        <div></div>
        <Transaction/>
        <br></br>
        <div>
          <button onClick={this.handleToggleClick}> {this.state.showlist? 'Customize your profile!' : 'Customize your profile!'} </button>
          {
            this.state.showlist? <Form changeUser={this.changeUser}/> : null
          }
          
        </div>
        
        

      </div>
    )
  }

}
export default App;
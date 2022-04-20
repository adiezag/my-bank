import {Component} from 'react'
import axios from 'axios';

class Transaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "1",
      debits: [],
      credits: [],
    }
    
  }

  async componentDidMount() {
    let response = await axios.get("https://moj-api.herokuapp.com/debits");
    let responseTwo = await axios.get("https://moj-api.herokuapp.com/credits")
    let debits = response.data;
    let credits = responseTwo.data
    this.setState({debits: debits});
    this.setState({credits: credits})
  }

  debitsView = () => {
    const { debits } = this.state;
    return debits.map((debit) => {
        let date = debit.date.slice(0,10);
        return <li key={debit.id}>${debit.amount} {debit.description} {date}</li>
    }) 
  }

  creditsView = () => {
    const { credits } = this.state;
    return credits.map((credit) => {
        let date = credit.date.slice(0,10);
        return <li key = {credit.id}>${credit.amount} {credit.description} {date}</li>
    })
    
  }

  displayTransaction = () => {

    
    if (this.state.selected === "1") {
      return (<div> <h2>Debits</h2> {this.debitsView()}
      <br></br>
      </div>);
    } else if (this.state.selected === "2"){
      return (<div> <h2>Credits</h2> {this.creditsView()}
      <br></br>
      </div>);
    }
  }

  handleChange = (event) => {
    this.setState({selected : event.target.value});
  }

  render() {
    return (
      <div>
        {this.displayTransaction()}
        <div>
          
          <select value = {this.state.selected} onChange={this.handleChange}>
            <option value = "1"> Debits </option>
            <option value = "2"> Credits </option>
          </select>
        </div>
        
      </div>
    );
  }

}

export default Transaction;
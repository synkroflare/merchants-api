import React, { Component} from 'react'
import logo from './logo.svg'
import './App.css';
import Routes from "./routes";


class App2 extends Component {

constructor(props) {
    super(props);
    this.state = { apiResponse: '',
                  code: '' };
                  this.updateInput = this.updateInput.bind(this);
                  
} 

updateInput(event){
  this.setState({code : event.target.value})  
 }

 handleClick = async (code) => {
{ 
    fetch('http://localhost:3030/company',
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({code: code})
    }
    )
        
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }))
       
}}

 render() {  
    return (
      
        <div className='App'>          
            <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                <h1 className='App-title'>Welcome to Merchants</h1>
                <h4 className='App-desc'>Insert a code to start the game:</h4>
                <form>
                  <label>
                  <input type="text" name="name"  onChange={this.updateInput}/>
                  </label>
                  <input type="submit" value="Submit" onClick={(e) => {
                      this.handleClick(this.state.code);
                  }}/>
                </form>

                <a
                  className="App-link"
                  href="/companyxx"
                  rel="noopener noreferrer">
                  Next Screen
                </a>

            </header>

      

           
        </div>
        
    )
}
}

export default App2
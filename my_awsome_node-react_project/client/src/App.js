import React, { Component } from 'react'

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: ""}
  }

  callAPI(){
    fetch("http://localhost:3001/testapi")
      .then(res => res.text())
      .then(res =>    
        this.setState({apiResponse:res})
        )
      .catch(err =>err);
  }

  componentDidMount(){
    this.callAPI();
  }
  
  render() {
    return (
      <div>
        <header>
          <h1> Welcome to react!!!</h1>
        </header>
        <p>{this.state.apiResponse}</p>
      </div>
    )
  }
}

export default App

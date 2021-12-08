import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  // constructor() {
  //   super()

  //   this.state = {
  //     increment: 47
  //   }
  // }

  state = {
    increment: 47
  }

  handleClick = () => {
    // this.setState({ increment: this.state.increment + 1 })
    // console.log(this.state.increment)

    this.setState((prevState, prevProps) => {
      return {
        increment: prevState.increment + 1
      }
    }, () => {
      console.log(this.state.increment)
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            { this.state.increment }
          </p>
          <button
            onClick={this.handleClick}>
            Update Data
          </button>
        </header>
      </div>
    );
  }
}

export default App;

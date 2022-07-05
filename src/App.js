import React, { Component } from 'react'
import './App.css'
import Square from './components/Square.js'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      board: ["?", "?", "?", "?", "?", "?", "?", "?", "?"]
    }
  }
  handleGamePlay = (index) => {
    alert(index)
  }

  render() {
    return(
      <>
        <h1>Treasure Hunt Game</h1>
        <div className="gameboard">
        {this.state.board.map((value, index) => {
          return <Square
            key={index}
            index={index}
            value={value}
            handleClick={this.handleGamePlay}
          />
        })}
        </div>
      </>
    )
  }
}
export default App

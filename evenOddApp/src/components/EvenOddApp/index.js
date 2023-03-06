import './index.css'
import {Component} from 'react'

class EvenOddApp extends Component {
  state = {num: 0, numberTye: 'Even'}

  onClickFun = () => {
    const {num, numberTye} = this.state
    const anotherNumber = Math.floor(Math.random() * 100)

    if (anotherNumber % 2 === 0) {
      this.setState({num: anotherNumber, numberTye: 'Even'})
    } else {
      this.setState({num: anotherNumber, numberTye: 'Odd'})
    }
  }

  render() {
    const {num, numberTye} = this.state
    return (
      <div className="main">
        <div className="container">
          <h1>Count {num}</h1>
          <p>Count is {numberTye}</p>
          <button onClick={this.onClickFun} className="button">
            Increment
          </button>
          <p>Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp

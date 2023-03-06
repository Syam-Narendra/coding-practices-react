import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {num: 0, arr: []}

  onClickFun = () => {
    const {num, arr} = this.state
    const anotherNum = Math.floor(Math.random() * 100)
    this.setState({num: anotherNum})
  }

  render() {
    const {num} = this.state
    return (
      <div className="main">
        <div className="container">
          <h1 className="heading">Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <div>
            <button onClick={this.onClickFun} className="button">
              Generate
            </button>
          </div>
          <p>{num}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator

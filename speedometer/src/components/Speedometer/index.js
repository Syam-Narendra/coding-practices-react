// Write your code here
import './index.css'
import {Component} from 'react'

class Speedometer extends Component {
  state = {count: 0}

  onIncrease = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState({count: count + 10})
    }
  }

  onDecrease = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState({count: count - 10})
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="main">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="image"
        />
        <h1 className="heading">Speed is {count}mph</h1>
        <p className="heading">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="buttons">
          <button className="increaseButton" onClick={this.onIncrease}>
            Accelerate
          </button>
          <button className="decreaseButton" onClick={this.onDecrease}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer

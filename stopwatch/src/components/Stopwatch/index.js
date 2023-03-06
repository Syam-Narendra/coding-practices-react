import {Component} from 'react'

let timerInterval = null

class Stopwatch extends Component {
  state = {minutes: 0, seconds: 0, isRunning: false}

  timerRunFun = () => {
    const {minutes, seconds} = this.state

    if (seconds === 60) {
      this.setState({minutes: minutes + 1, seconds: 0, isRunning: true})
    } else {
      this.setState({seconds: seconds + 1, isRunning: true})
    }
  }

  startFun = () => {
    const {isRunning} = this.state
    if (!isRunning) {
      timerInterval = setInterval(this.timerRunFun, 1000)
    }
  }

  stopFun = () => {
    clearInterval(timerInterval)
    this.setState({isRunning: false})
  }

  resetFun = () => {
    this.setState({minutes: 0, seconds: 0})
    this.stopFun()
  }

  render() {
    const {minutes, seconds} = this.state

    return (
      <div className="main">
        <div className="container">
          <h1>Stopwatch</h1>
          <div className="card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
            />
            <p>Timer</p>
            <h1>
              {minutes < 10 ? `0${minutes}` : minutes}:
              {seconds < 10 ? `0${seconds}` : seconds}
            </h1>
            <div className="buttons">
              <button onClick={this.startFun} type="button">
                Start
              </button>
              <button onClick={this.stopFun} type="button">
                Stop
              </button>
              <button onClick={this.resetFun} type="button">
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch

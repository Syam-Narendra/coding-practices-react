import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {letterNumber: ''}

  changeFun = event => {
    const {letterNumber} = this.state
    this.setState({letterNumber: event.target.value})
  }

  render() {
    const {letterNumber} = this.state
    return (
      <div className="main">
        <div className="oneBlock">
          <h1>Calculate The Letters You Enter</h1>
          <form>
            <label for="input">Enter the phrase</label>
            <input
              id="input"
              onChange={this.changeFun}
              className="input"
              placeholder="Enter the phrase"
              type="input"
            />
          </form>
          <p className="noOfLett">No.of Letters: {letterNumber.length}</p>
        </div>
        <div className="image">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator

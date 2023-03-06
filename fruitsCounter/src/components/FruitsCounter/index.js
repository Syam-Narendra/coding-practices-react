// Write your code here
import './index.css'
import {Component} from 'react'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  mangoIncrease = () => {
    const {mango} = this.state
    this.setState({mango: mango + 1})
  }

  bananaIncrease = () => {
    const {banana} = this.state
    this.setState({banana: banana + 1})
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="main">
        <div className="container">
          <h1>
            Bob ate <c>{mango}</c> mangoes <c>{banana}</c> bananas
          </h1>
          <div>
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              alt="mango"
            />
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              alt="banana"
            />
          </div>
          <div className="buttons">
            <button onClick={this.mangoIncrease}>Eat Mango</button>
            <button onClick={this.bananaIncrease}>Eat banana</button>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter

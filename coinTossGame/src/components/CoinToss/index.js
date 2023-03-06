import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    total: 0,
    heads: 0,
    tails: 0,
    headImg: true,
  }

  onTossClick = () => {
    const tossResult = Math.floor(Math.random() * 2)
    const {total, heads, tails} = this.state
    if (tossResult === 0) {
      this.setState({
        heads: heads + 1,
        total: total + 1,
        headImg: true,
      })
    } else {
      this.setState({
        tails: tails + 1,
        total: total + 1,
        headImg: false,
      })
    }
  }

  render() {
    const headUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
    const tailUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    const {total, heads, tails, headImg} = this.state
    const imageUrl = headImg ? headUrl : tailUrl
    return (
      <div className="main">
        <div className="container">
          <h1 className="heading">Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img className="image" src={imageUrl} alt="toss result" />
          <button className="button" type="button" onClick={this.onTossClick}>
            Toss Coin
          </button>
          <div className="totalCollection">
            <p>Total: {total}</p>
            <p>Heads: {heads}</p>
            <p>Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss

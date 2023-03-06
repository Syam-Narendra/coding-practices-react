import {Component} from 'react'

import './index.css'
import GameImages from '../gameImages/index'
import Tabitem from '../tabList/index'

const tabsList = [
  {tabId: 'FRUIT', displayText: 'Fruits'},
  {tabId: 'ANIMAL', displayText: 'Animals'},
  {tabId: 'PLACE', displayText: 'Places'},
]
let interval = null
class Matchgame extends Component {
  constructor(props) {
    super(props)
    const {imagesList} = props
    this.state = {
      score: 0,
      selectedTab: tabsList[0].tabId,
      isGameOn: true,
      mainImageId: imagesList[0].id,
      timer: 60,
    }
    interval = setInterval(this.decreaseTimer, 1000)
  }

  changeSelectedTab = tabId => {
    this.setState({selectedTab: tabId})
  }

  resetGame = () => {
    interval = setInterval(this.decreaseTimer, 1000)
    this.setState({score: 0, isGameOn: true, timer: 60})
  }

  getRandomMainImage = id => {
    const {imagesList} = this.props
    const {score, mainImageId} = this.state
    const item = imagesList[Math.floor(Math.random() * imagesList.length)]
    if (id === mainImageId) {
      this.setState({mainImageId: item.id, score: score + 1})
    } else {
      clearInterval(interval)
      this.setState({isGameOn: false})
    }
  }

  getHeader = () => {
    const {score, timer} = this.state
    return (
      <ul className="header">
        <li>
          <img
            className="website-logo"
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
          />
        </li>

        <div className="score-timer">
          <li>
            <p className="score">Score: </p>
            <h1 className="score-colour">{score}</h1>
          </li>
          <img
            className="timer-logo"
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
          />
          <p className="score-colour">{timer} sec</p>
        </div>
      </ul>
    )
  }

  gameMainContainer = () => {
    const {selectedTab, mainImageId} = this.state
    const {imagesList} = this.props
    const renderList = imagesList.filter(each => each.category === selectedTab)
    const shuffledImage = imagesList.find(each => each.id === mainImageId)
    return (
      <div className="container">
        <div className="main-image">
          <img
            alt="match"
            className="main-image"
            src={shuffledImage.imageUrl}
          />
        </div>
        <ul className="tabsList">
          {tabsList.map(each => (
            <Tabitem
              changeSelectedTab={this.changeSelectedTab}
              tabItem={each}
              key={each.tabId}
              isActive={each.tabId === selectedTab}
            />
          ))}
        </ul>
        <ul className="images-list-contaoner">
          {renderList.map(each => (
            <GameImages
              getRandomMainImage={this.getRandomMainImage}
              imageData={each}
              key={each.id}
            />
          ))}
        </ul>
      </div>
    )
  }

  getScoreCard = () => {
    const {score} = this.state
    return (
      <div className="score-card-container">
        <img
          alt="trophy"
          className="trophy-image"
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        />
        <p>YOUR SCORE</p>
        <h1>{score}</h1>
        <button onClick={this.resetGame} className="reset-button" type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
          />
          PLAY AGAIN
        </button>
      </div>
    )
  }

  decreaseTimer = () => {
    const {timer} = this.state
    if (timer === 0) {
      this.setState({isGameOn: false})
    } else {
      this.setState({timer: timer - 1})
    }
  }

  render() {
    const {isGameOn} = this.state
    return (
      <div className="main">
        {this.getHeader()}
        {isGameOn && this.gameMainContainer()}
        {!isGameOn && this.getScoreCard()}
      </div>
    )
  }
}
export default Matchgame

import {Component} from 'react'
import './index.css'

const ImageButtons = props => {
  const {emojiData, emojiClicked} = props
  const {name, imageUrl} = emojiData
  const clickFun = () => {
    emojiClicked()
  }
  return (
    <li>
      <button type="button" className="button" onClick={clickFun}>
        <img alt={name} className="image" src={imageUrl} />
      </button>
    </li>
  )
}

class Feedback extends Component {
  state = {clicked: true}

  emojiClicked = () => {
    const {clicked} = this.state
    this.setState({clicked: !clicked})
    console.log('EMoji')
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {clicked} = this.state
    return (
      <div className="main">
        <div className="container">
          {clicked ? (
            <div>
              <h1>
                How satisfied are you with our customer support performance?
              </h1>

              <ul className="images-container">
                {emojis.map(each => (
                  <ImageButtons
                    emojiData={each}
                    emojiClicked={this.emojiClicked}
                    key={each.id}
                  />
                ))}
              </ul>
            </div>
          ) : (
            <div>
              <img className="image" alt="love emoji" src={loveEmojiUrl} />
              <h1>Thank You!</h1>
              <p>We Will Use This Feedback</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default Feedback

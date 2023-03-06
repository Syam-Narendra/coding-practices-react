import {Component} from 'react'
import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]
const GetButton = props => {
  const {languageDetails, isActiveButton, changeImage} = props
  const {id, buttonText} = languageDetails
  const buttonClass = isActiveButton
    ? 'button active-button'
    : 'button inactive-button'
  const sendImageUrl = () => {
    changeImage(id)
  }
  return (
    <li>
      <button className={buttonClass} onClick={sendImageUrl} type="button">
        {buttonText}
      </button>
    </li>
  )
}

class MultiLingualGreetings extends Component {
  state = {activeLang: languageGreetingsList[0]}

  changeImage = id => {
    const changeLanguage = languageGreetingsList.find(each => each.id === id)
    this.setState({activeLang: changeLanguage})
  }

  render() {
    const {activeLang} = this.state
    const {imageUrl, id, imageAltText} = activeLang
    return (
      <div className="main">
        <h1>Multilingual Greetings</h1>
        <ul className="buttons">
          {languageGreetingsList.map(each => (
            <GetButton
              isActiveButton={each.id === id}
              languageDetails={each}
              changeImage={this.changeImage}
              key={each.id}
            />
          ))}
        </ul>
        <img className="image" src={imageUrl} alt={imageAltText} />
      </div>
    )
  }
}

const App = () => <MultiLingualGreetings />

export default App

import './App.css'
import {Component} from 'react'
import {v4} from 'uuid'

const ShowCountItem = props => {
  const {data} = props
  const {textEntered, length} = data
  return (
    <li className="count-item">
      <p>{textEntered}</p>
      <p>{length}</p>
    </li>
  )
}

class App extends Component {
  state = {
    id: v4(),
    text: '',
    textList: [],
  }

  onChangeInput = event => {
    this.setState({text: event.target.value})
  }

  onAddButtonClick = () => {
    const {text, textList} = this.state
    const textCountNum = text.length
    const list = {
      textEntered: text,
      length: textCountNum,
    }
    this.setState({textList: [...textList, list], text: ''})
  }

  render() {
    const {text, textList} = this.state
    console.log(textList)
    return (
      <div className="main">
        <div className="yellow-container">
          <h1>Count the characters like a Boss</h1>
          {textList.length === 0 ? (
            <img
              className="no-user-input-image"
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              alt="no user inputs"
            />
          ) : (
            <ul>
              {textList.map(each => (
                <ShowCountItem data={each} key={each.id} />
              ))}
            </ul>
          )}
        </div>
        <div className="black-container">
          <h1 className="heading">Character Counter</h1>
          <form>
            <input
              placeholder="Enter the Characters here"
              onChange={this.onChangeInput}
              type="text"
              value={text}
            />
            <button onClick={this.onAddButtonClick} type="button">
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default App

import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem/index'

class GoogleSuggestions extends Component {
  state = {input: ''}

  upWardFun = sugg => {
    this.setState({input: sugg})
  }

  changeEvent = event => {
    this.setState({input: event.target.value})
  }

  render() {
    const {suggestionsList} = this.props
    const {input} = this.state
    const filterData = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(input.toLowerCase()),
    )
    return (
      <div className="main">
        <div className="imageContain">
          <img
            className="image"
            alt="google logo"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          />
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
          alt="search icon"
        />
        <input value={input} type="search" onChange={this.changeEvent} />
        <ul>
          {filterData.map(each => (
            <SuggestionItem
              suggestion={each.suggestion}
              id={each.id}
              key={each.id}
              upWardFun={this.upWardFun}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default GoogleSuggestions

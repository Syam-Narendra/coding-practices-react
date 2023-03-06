import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {stateId: countryAndCapitalsList[0].id}

  changeFun = event => {
    this.setState({stateId: event.target.value})
  }

  render() {
    const {stateId} = this.state
    const filterCaptial = countryAndCapitalsList.find(
      each => each.id === stateId,
    )

    return (
      <div className="main">
        <div className="container">
          <h1>Countries and Capitals</h1>
          <select onChange={this.changeFun}>
            {countryAndCapitalsList.map(each => (
              <option key={each.id} value={each.id}>
                {each.capitalDisplayText}
              </option>
            ))}
          </select>
          <p>is capital of which country?</p>
          <h1>{filterCaptial.country}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals

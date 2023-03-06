import {Component} from 'react'
import DestinationItem from '../DestinationItem/index'
import './index.css'

class DestinationSearch extends Component {
  state = {userInput: ''}

  onClickEve = event => {
    this.setState({userInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {userInput} = this.state
    const userSearchList = destinationsList.filter(each =>
      each.name.toLowerCase().includes(userInput.toLowerCase()),
    )

    return (
      <div className="main">
        <h1>Destination Search</h1>
        <input type="search" placeholder="Search" onChange={this.onClickEve} />
        <img
          src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
          alt="search icon"
        />
        <div className="itemContainer">
          <ul>
            {userSearchList.map(each => (
              <DestinationItem
                name={each.name}
                imgUrl={each.imgUrl}
                key={each.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch

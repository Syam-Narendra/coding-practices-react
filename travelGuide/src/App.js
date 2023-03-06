import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './App.css'

const TravelCard = props => {
  const {data} = props
  const {imageUrl, name, description} = data
  return (
    <li>
      <img src={imageUrl} alt={name} />
      <h1>{name}</h1>
      <p>{description}</p>
    </li>
  )
}

class TravelGuide extends Component {
  state = {travelData: [], isLoading: true}

  componentDidMount() {
    const url = 'https://apis.ccbp.in/tg/packages'
    this.getWebsiteData(url)
  }

  getWebsiteData = async url => {
    const response = await fetch(url)
    const data = await response.json()
    this.setState({travelData: data.packages, isLoading: false})
  }

  renderWebsite = () => {
    const {travelData} = this.state
    const camelCaseData = travelData.map(each => ({
      id: each.id,
      name: each.name,
      imageUrl: each.image_url,
      description: each.description,
    }))

    console.log(camelCaseData)
    return (
      <ul>
        {camelCaseData.map(each => (
          <TravelCard key={each.id} data={each} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="main">
        <h1>Travel Guide</h1>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          this.renderWebsite()
        )}
      </div>
    )
  }
}
const App = () => <TravelGuide />

export default App

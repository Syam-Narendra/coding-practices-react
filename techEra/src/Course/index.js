import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import FailurePage from '../FailurePage/index'

class Course extends Component {
  state = {pageStatus: 'loading', pageData: []}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/te/courses/${id}`
    try {
      const response = await fetch(url)
      let data = await response.json()
      data = data.course_details
      const pageData = {
        des: data.description,
        name: data.name,
        imageUrl: data.image_url,
      }
      this.setState({pageStatus: 'showPage', pageData})
    } catch {
      this.setState({pageStatus: 'failure'})
    }
  }

  showContent = () => {
    const {pageData} = this.state
    const {des, name, imageUrl} = pageData
    return (
      <div>
        <img src={imageUrl} alt={name} />
        <h1>{name}</h1>
        <p>{des}</p>
      </div>
    )
  }

  renderLoading = () => (
    <div data-testid="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  renderPage = () => {
    const {pageStatus} = this.state
    switch (pageStatus) {
      case 'showPage':
        return this.showContent()
      case 'loading':
        return this.renderLoading()
      default:
        return <FailurePage />
    }
  }

  render() {
    return (
      <div>
        <Link to="/">
          <img
            className="image-logo"
            src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
            alt="website logo"
          />
        </Link>
        {this.renderPage()}
      </div>
    )
  }
}

export default Course

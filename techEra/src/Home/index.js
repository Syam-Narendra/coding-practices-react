import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import './index.css'
import FailurePage from '../FailurePage/index'

const CourseButton = props => {
  const {data} = props
  const {id, imageUrl, name} = data

  return (
    <li className="course-item">
      <Link to={`/courses/${id}`} className="course-button">
        <img src={imageUrl} alt={name} />
        <p>{name}</p>
      </Link>
    </li>
  )
}

class Home extends Component {
  state = {pageStatus: 'loading', courseData: []}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    try {
      const url = 'https://apis.ccbp.in/te/courses'
      const response = await fetch(url)
      console.log(response)
      if (response.ok === true) {
        const data = await response.json()
        const courseData = data.courses.map(each => ({
          id: each.id,
          name: each.name,
          imageUrl: each.logo_url,
          desc: each.description,
        }))
        this.setState({pageStatus: 'showContent', courseData})
      }
    } catch {
      this.setState({pageStatus: 'failure'})
    }
  }

  renderCourseData = () => {
    const {courseData} = this.state
    return (
      <ul className="courses-data">
        {courseData.map(each => (
          <CourseButton key={each.id} data={each} />
        ))}
      </ul>
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
      case 'loading':
        return this.renderLoading()
      case 'showContent':
        return this.renderCourseData()
      default:
        return (
          <>
            <FailurePage />
            <button type="button" onClick={this.getData}>
              Retry
            </button>
          </>
        )
    }
  }

  render() {
    return (
      <div className="main">
        <div className="header">
          <Link to="/">
            <img
              className="image-logo"
              src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
              alt="website logo"
            />
          </Link>
          <h1>Courses</h1>
          <div>{this.renderPage()}</div>
        </div>
      </div>
    )
  }
}

export default Home

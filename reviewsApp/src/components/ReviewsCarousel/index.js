import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {item: 0}

  onDecrement = () => {
    const {item} = this.state
    // const {reviewsData} = this.props
    if (item > 0) {
      this.setState({item: item - 1})
    }
    // if (item === 0) {
    //   this.setState({item: reviewsData.length - 1})
    // }
  }

  onIncrement = () => {
    const {item} = this.state
    const {reviewsData} = this.props
    if (item < reviewsData.length - 1) {
      this.setState({item: item + 1})
    }
    // if (item === reviewsData.length - 1) {
    //   this.setState({item: 0})
    // }
  }

  render() {
    const {reviewsData} = this.props
    const {item} = this.state
    const {imgUrl, username, companyName, description} = reviewsData[item]
    // console.log(item)
    return (
      <div className="main">
        <h1 className="heading">Reviews</h1>

        <img src={imgUrl} alt={username} />
        <div className="arrow-container">
          <button
            testId="leftArrow"
            className="button"
            onClick={this.onDecrement}
            type="button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <p>{username}</p>
          <button
            testId="rightArrow"
            className="button"
            onClick={this.onIncrement}
            type="button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
        <p>{companyName}</p>
        <p>{description}</p>
      </div>
    )
  }
}

export default ReviewsCarousel

import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isOpened: false}

  showHideAns = () => {
    const {isOpened} = this.state
    this.setState({isOpened: !isOpened})
  }

  render() {
    const {faqDetails} = this.props
    const {questionText, answerText} = faqDetails
    const {isOpened} = this.state
    const imageUrl = !isOpened
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

    const altText = !isOpened ? 'plus' : 'minus'

    return (
      <li className="faq-item-container">
        <h1>{questionText}</h1>
        <button
          onClick={this.showHideAns}
          className="plus-button"
          type="button"
        >
          <img src={imageUrl} alt={altText} />
        </button>
        {isOpened && <p>{answerText}</p>}
      </li>
    )
  }
}
export default FaqItem

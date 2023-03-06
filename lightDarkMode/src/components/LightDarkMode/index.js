import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    text: 'Light Mode',
    mode: 'dark',
    containClass: 'darkContainer',
    headingClass: 'darkHeading',
  }

  buttonClick = () => {
    const {text, mode, containClass, headingClass} = this.state
    if (mode === 'light') {
      this.setState({
        text: 'Light Mode',
        mode: 'dark',
        containClass: 'darkContainer',
        headingClass: 'darkHeading',
      })
    }

    if (mode === 'dark') {
      this.setState({
        text: 'Dark Mode',
        mode: 'light',
        containClass: 'lightContainer',
        headingClass: 'lightHeading',
      })
    }
  }

  render() {
    const {text, containClass, headingClass} = this.state
    const containerClassName = `container ${containClass}`

    return (
      <div className="main">
        <div className={containerClassName}>
          <h1 className={headingClass}>Click To Change Mode</h1>
          <button className="button" onClick={this.buttonClick}>
            {text}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode

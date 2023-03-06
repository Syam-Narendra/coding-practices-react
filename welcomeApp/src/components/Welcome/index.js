import './index.css'
import {Component} from 'react'

export Screen = () => {}

export class Welcome extends Component {
  state = {text: 'Subscribe'}

  buttonClick = () => {
    const {text} = this.state
    if (text === 'Subscribe') {
      this.setState({text: 'Subscribed'})
    }
    if (text === 'Subscribed') {
      this.setState({text: 'Subscribe'})
    }
  }

  render() {
    const {text} = this.state
    return (
      <div className="main">
        <h1 className="heading">Welcome</h1>
        <p>Thank You! Happy Learning</p>
        <button onClick={this.buttonClick} className="button">
          {text}
        </button>
      </div>
    )
  }
}

import './index.css'
import {Component} from 'react'

class Home extends Component {
  state = {heading: 'Please Login', loginText: 'Login'}

  onclick = () => {
    const {heading, loginText} = this.state
    if (loginText === 'Login') {
      this.setState({heading: 'Welcome User', loginText: 'Logout'})
    }
    if (loginText === 'Logout') {
      this.setState({heading: 'Please Login', loginText: 'Login'})
    }
  }

  render() {
    const {heading, loginText} = this.state
    return (
      <div className="main">
        <div className="container">
          <h1>{heading}</h1>
          <button onClick={this.onclick}>{loginText}</button>
        </div>
      </div>
    )
  }
}
export default Home

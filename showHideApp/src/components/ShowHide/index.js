import './index.css'
import {Component} from 'react'

class ShowHide extends Component {
  state = {firstShow: false, secondShow: false}

  firstButton = () => {
    const {firstShow} = this.state
    if (!firstShow) {
      this.setState({firstShow: true})
    }
    if (firstShow) {
      this.setState({firstShow: false})
    }
  }

  secondButton = () => {
    const {secondShow} = this.state
    if (secondShow) {
      this.setState({secondShow: false})
    } else {
      this.setState({secondShow: true})
    }
  }

  render() {
    const {firstShow, secondShow} = this.state
    return (
      <div className="main">
        <h1>Show/Hide</h1>
        <div className="buttons">
          <button onClick={this.firstButton} className="button">
            Show/Hide Firstname
          </button>
          <button onClick={this.secondButton} className="button">
            Show/Hide Lastname
          </button>
          <div className="showHide">
            {firstShow && <p className="showFirstName">Joe</p>}
            {secondShow && <p className="showFirstName">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide

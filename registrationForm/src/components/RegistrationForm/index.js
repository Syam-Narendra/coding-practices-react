import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    showForm: true,
    firstName: '',
    lastName: '',
    firstNameError: false,
    lastNameError: false,
  }

  resetFormPage = () => {
    this.setState({showForm: true})
  }

  setFirstNameError = event => {
    if (event.target.value === '') {
      this.setState({firstNameError: true})
    } else {
      this.setState({firstName: event.target.value, firstNameError: false})
    }
  }

  setSecondNameError = event => {
    if (event.target.value === '') {
      this.setState({lastNameError: true})
    } else {
      this.setState({lastName: event.target.value, lastNameError: false})
    }
  }

  submitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName === '') {
      this.setState({firstNameError: true})
    }
    if (lastName === '') {
      this.setState({lastNameError: true})
    }
    if (firstName !== '' && lastName !== '') {
      this.setState({showForm: false})
    }
  }

  form = () => {
    const {firstNameError, lastNameError} = this.state
    return (
      <div className="main">
        <h1>Registration</h1>
        <form onSubmit={this.submitForm} className="form">
          <label htmlFor="first-name">FIRST Name</label>
          <input
            onBlur={this.setFirstNameError}
            id="first-name"
            type="text"
            placeholder="First name"
          />
          {firstNameError && <p>Required</p>}
          <label htmlFor="last-name">LAST Name</label>
          <input
            onBlur={this.setSecondNameError}
            id="last-name"
            type="text"
            placeholder="Last name"
          />
          {lastNameError && <p>Required</p>}
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }

  showSuccess = () => (
    <div className="main">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
      />
      <p>Submitted Successfully</p>
      <button type="button" onClick={this.resetFormPage}>
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {showForm} = this.state

    return (
      <div className="main">{showForm ? this.form() : this.showSuccess()}</div>
    )
  }
}

export default RegistrationForm

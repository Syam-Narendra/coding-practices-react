import {v4} from 'uuid'
import './index.css'
import {Component} from 'react'
import Passwords from '../password/index'

class PasswordManager extends Component {
  state = {
    passwordList: [],
    websiteName: '',
    userName: '',
    searchWord: '',
    password: '',
    showPassword: false,
  }

  showNoPassword = () => {
    const a = 0
    return (
      <div className="no-passwords-container">
        <img
          className="no-password-image"
          src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
          alt="no passwords"
        />
        <p>No Passwords</p>
      </div>
    )
  }

  setWebsiteName = event => {
    this.setState({websiteName: event.target.value})
  }

  setUserName = event => {
    this.setState({userName: event.target.value})
  }

  setPassword = event => {
    this.setState({password: event.target.value})
  }

  addPassword = event => {
    event.preventDefault()
    const {websiteName, userName, password, passwordList} = this.state
    const newPassword = {
      id: v4(),
      website: websiteName,
      user: userName,
      pword: password,
    }

    this.setState({
      passwordList: [...passwordList, newPassword],
      websiteName: '',
      userName: '',
      password: '',
    })
  }

  changeShowPassword = () => {
    const {showPassword} = this.state
    this.setState({showPassword: !showPassword})
  }

  deletePassword = id => {
    const {passwordList} = this.state
    const unDeletedList = passwordList.filter(each => each.id !== id)
    this.setState({passwordList: unDeletedList})
  }

  searchingPasswords = event => {
    this.setState({searchWord: event.target.value})
  }

  render() {
    const {
      passwordList,
      websiteName,
      userName,
      showPassword,
      password,
      searchWord,
    } = this.state
    const filteredData = passwordList.filter(each =>
      each.website.toLowerCase().includes(searchWord.toLowerCase()),
    )
    const numberOfPass = filteredData.length
    return (
      <div className="main">
        <img
          className="app-logo"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
        />
        <div className="add-new-password-container">
          <div className="add-pass-inputs">
            <form onSubmit={this.addPassword}>
              <h1 className="add-password-heading">Add New Password</h1>
              <div className="website-logo-input">
                <img
                  className="weblogo"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                />
                <input
                  value={websiteName}
                  onChange={this.setWebsiteName}
                  className="website-input-box"
                  placeholder="Enter Website"
                />
              </div>
              <div className="website-logo-input">
                <img
                  className="weblogo"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                />
                <input
                  value={userName}
                  onChange={this.setUserName}
                  className="website-input-box"
                  placeholder="Enter Username"
                />
              </div>
              <div className="website-logo-input">
                <img
                  className="weblogo"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                />
                <input
                  value={password}
                  onChange={this.setPassword}
                  type="password"
                  className="website-input-box"
                  placeholder="Enter Password"
                />
              </div>
              <button className="add-button" type="submit">
                Add
              </button>
            </form>
          </div>
          <div className="top-password-image">
            <img
              className="password-manager-image"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
            />
          </div>
        </div>

        <div className="show-passwords-container">
          <div className="password-header">
            <div className="no-of-passwords">
              <h1 className="your-password-heading">Your Passwords</h1>
              <p className="password-number">{numberOfPass}</p>
            </div>
            <div className="search-box">
              <img
                className="search-icon"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
              />

              <input
                onChange={this.searchingPasswords}
                className="search-input"
                type="search"
              />
            </div>
          </div>
          <label>
            <input
              onChange={this.changeShowPassword}
              id="password-checkbox"
              type="checkbox"
            />
            Show passwords
          </label>
          <ul className="password-list">
            {numberOfPass === 0
              ? this.showNoPassword()
              : filteredData.map(each => (
                  <Passwords
                    deletePassword={this.deletePassword}
                    showPassword={showPassword}
                    key={each.id}
                    passwordInfo={each}
                  />
                ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default PasswordManager

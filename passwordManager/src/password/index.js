import './index.css'

const Passwords = props => {
  const {passwordInfo, showPassword, deletePassword} = props
  const {website, user, pword, id} = passwordInfo
  const icon = website[0].toUpperCase()

  const sendPasswordId = () => {
    deletePassword(id)
  }

  return (
    <li className="password">
      <p className="logo">{icon}</p>
      <div className="pass-info">
        <p>{website}</p>
        <p>{user}</p>
        {showPassword ? (
          <p>{pword}</p>
        ) : (
          <img
            className="star-image"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
          />
        )}
        <button
          testid="delete"
          type="button"
          onClick={sendPasswordId}
          className="delete-button"
        >
          <img
            className="delete-image"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default Passwords

import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="header">
    <img
      src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
      alt="wave"
    />
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/contact">Contact</a>
    {/* <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link> */}
  </div>
)
export default Header

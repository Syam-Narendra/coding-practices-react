import './index.css'
import Header from '../Header/index'
import Footer from '../Footer/index'
import ConfigurationContext from '../../context/ConfigurationContext'

const Layout = () => {
  const renderLeftNavbar = () => (
    <div className="left-nav-bar">
      <h1>Left Navbar Menu</h1>
      <ul>
        <li>
          <p>Item 1</p>
        </li>
        <li>
          <p>Item 2</p>
        </li>
        <li>
          <p>Item 3</p>
        </li>
        <li>
          <p>Item 4</p>
        </li>
      </ul>
    </div>
  )

  const renderContext = () => (
    <div className="context">
      <h1>Content</h1>
      <p>Lorem ipsum asgcfagcfgacagchgacc</p>
    </div>
  )

  const renderRightNavBar = () => (
    <div className="right-nav-bar">
      <h1>Right Navbar</h1>
      <p>Ad 1</p>
      <p>Ad 2</p>
    </div>
  )
  return (
    <ConfigurationContext.Consumer>
      {value => {
        const {showContent, showLeftNavbar, showRightNavbar} = value
        return (
          <>
            <Header />
            <div className="main">
              {showLeftNavbar && renderLeftNavbar()}
              {showContent && renderContext()}
              {showRightNavbar && renderRightNavBar()}
            </div>
            <Footer />
          </>
        )
      }}
    </ConfigurationContext.Consumer>
  )
}
export default Layout

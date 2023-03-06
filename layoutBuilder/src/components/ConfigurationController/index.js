import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      return (
        <div>
          <h1>Layout</h1>
          <div className="toogle-buttons">
            <input
              type="checkbox"
              id="Content"
              checked={showContent}
              onChange={onToggleShowContent}
            />
            <label htmlFor="Content">Content</label>
          </div>
          <div className="toogle-buttons">
            <input
              type="checkbox"
              id="Left Navbar"
              checked={showLeftNavbar}
              onChange={onToggleShowLeftNavbar}
            />
            <label htmlFor="Left Navbar">Left Navbar</label>
          </div>
          <div className="toogle-buttons">
            <input
              type="checkbox"
              id="Right Navbar"
              checked={showRightNavbar}
              onChange={onToggleShowRightNavbar}
            />
            <label htmlFor="Right Navbar">Right Navbar</label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController

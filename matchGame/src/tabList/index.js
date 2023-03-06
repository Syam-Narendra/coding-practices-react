import './index.css'

const Tabitem = props => {
  const {tabItem, changeSelectedTab, isActive} = props
  const btnClassName = isActive ? 'tabButton activeButton' : 'tabButton'

  const changeTab = () => {
    changeSelectedTab(tabItem.tabId)
  }
  return (
    <li>
      <button onClick={changeTab} type="button" className={btnClassName}>
        {tabItem.displayText}
      </button>
    </li>
  )
}

export default Tabitem

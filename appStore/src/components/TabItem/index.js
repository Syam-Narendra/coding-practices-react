import './index.css'

const TabItem = props => {
  const {tabItemDetails, changeActiveTab, activeTabId} = props
  const {tabId, displayText} = tabItemDetails
  const tabClassName = activeTabId ? 'tabButton active-border' : 'tabButton'
  const onButtonClick = () => {
    changeActiveTab(tabId)
  }
  return (
    <li className="tabList">
      <button onClick={onButtonClick} className={tabClassName} type="button">
        {displayText}
      </button>
    </li>
  )
}
export default TabItem

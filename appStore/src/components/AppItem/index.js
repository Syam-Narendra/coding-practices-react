import './index.css'

const AppIconItem = props => {
  const {appItemDetails} = props
  const {appName, imageUrl} = appItemDetails
  return (
    <li className="appItem">
      <img className="appIcon" src={imageUrl} alt={appName} />
      <p className="app-name">{appName}</p>
    </li>
  )
}
export default AppIconItem

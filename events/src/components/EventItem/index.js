import './index.css'

const EventItem = props => {
  const {details, changeActiveItem} = props
  const {id, imageUrl, name, location} = details
  const sendName = () => {
    changeActiveItem(id)
  }
  return (
    <li className="eventcard">
      <button className="button" type="button" onClick={sendName}>
        <img className="event-image" src={imageUrl} alt="event" />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem

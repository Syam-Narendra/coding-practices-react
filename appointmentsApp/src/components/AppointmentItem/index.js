import {format} from 'date-fns'

import './index.css'

const AppointmentItem = props => {
  const {details, setFavorite} = props
  const {id, name, date, isFavorite} = details
  const formattedDate = format(new Date(date), 'dd MMMM yyyy, EEEE')
  const clickFavorite = () => {
    setFavorite(id)
  }
  const favUrl = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  return (
    <li className="appointment-item-container">
      <div className="name-star">
        <p>{name}</p>
        <button type="button" onClick={clickFavorite} testid="star">
          <img className="image-css" src={favUrl} alt="star" />
        </button>
      </div>
      <p className="date">{formattedDate}</p>
    </li>
  )
}
export default AppointmentItem

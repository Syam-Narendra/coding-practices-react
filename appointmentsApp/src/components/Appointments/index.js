import {v4} from 'uuid'
import {Component} from 'react'
import AppointmentItem from '../AppointmentItem/index'
import './index.css'

class Appointments extends Component {
  state = {StateName: '', stateDate: '', appointmentList: [], showFav: false}

  setName = event => {
    this.setState({StateName: event.target.value})
  }

  setDate = event => {
    this.setState({stateDate: event.target.value})
  }

  bookAppointment = () => {
    const {StateName, stateDate, appointmentList} = this.state
    const v4id = v4()
    const appointment = {
      id: v4id,
      name: StateName,
      date: stateDate,
      isFavorite: false,
    }

    this.setState({
      appointmentList: [...appointmentList, appointment],
      stateDate: '',
      StateName: '',
    })
  }

  setFavorite = id => {
    const {appointmentList} = this.state
    const toogleFavoriteList = appointmentList.map(each => {
      if (each.id === id) {
        return {...each, isFavorite: !each.isFavorite}
      }
      return each
    })
    this.setState({appointmentList: [...toogleFavoriteList]})
  }

  showFavorites = () => {
    const {showFav} = this.state
    this.setState({showFav: !showFav})
  }

  render() {
    const {appointmentList, showFav, stateDate, StateName} = this.state
    const favList = appointmentList.filter(each => each.isFavorite === true)
    const renderList = showFav ? favList : appointmentList
    const startClassName = showFav
      ? 'star-button active-button'
      : 'star-button inactive-button'
    console.log(appointmentList)
    return (
      <div className="main">
        <div className="container">
          <div className="appointment">
            <div className="inputs">
              <h1>Add Appointment</h1>
              <form>
                <input
                  value={StateName}
                  id="input"
                  onChange={this.setName}
                  className="input-box"
                />
                <label htmlFor="input" className="text">
                  Title
                </label>

                <input
                  value={stateDate}
                  onChange={this.setDate}
                  className="date-input"
                  type="date"
                  id="date"
                />
                <label htmlFor="date" className="text">
                  Date
                </label>

                <button
                  className="button"
                  onClick={this.bookAppointment}
                  type="button"
                >
                  Add
                </button>
              </form>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
            />
          </div>
          <div className="appointment-container">
            <div className="appointments-header">
              <h1>Appointments</h1>
              <button
                type="button"
                onClick={this.showFavorites}
                className={startClassName}
              >
                Starred
              </button>
            </div>
            <ul className="appointmets-list">
              {renderList.map(each => (
                <AppointmentItem
                  setFavorite={this.setFavorite}
                  details={each}
                  key={each.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments

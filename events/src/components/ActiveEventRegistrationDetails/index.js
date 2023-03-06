import './index.css'

const ActiveEventItem = props => {
  const {activeItemDetails} = props
  const statusData = [
    {
      status: 'YET_TO_REGISTER',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/events-register-img.png',
      alt: 'yet to register',
      para: 'A live performance brings so much to your relationship with dance',
      heading: '',
      button: 'Register Here',
    },
    {
      status: 'REGISTERED',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/events-regestered-img.png',
      alt: 'registered',
      para: '',
      heading: 'You have already registered for the event',
      button: '',
    },
    {
      status: 'REGISTRATIONS_CLOSED',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png',
      alt: 'registrations closed',
      para: 'Stay tuned. We will reopen',
      heading: 'Registrations Are Closed Now!',
      button: '',
    },
  ]
  if (activeItemDetails !== undefined) {
    const {registrationStatus} = activeItemDetails
    const activeData = statusData.find(
      each => each.status === registrationStatus,
    )
    return (
      <>
        <img
          className="activeimage"
          src={activeData.imageUrl}
          alt={activeData.alt}
        />
        <p>{activeData.para}</p>
        <h1>{activeData.heading}</h1>
        {activeData.button !== '' ? (
          <button type="button">{activeData.button}</button>
        ) : (
          <></>
        )}
      </>
    )
  }

  return <p>Click on an event, to view its registration details</p>
}
export default ActiveEventItem

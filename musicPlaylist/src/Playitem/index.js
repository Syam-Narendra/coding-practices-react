import './index.css'

const Playitem = props => {
  const {playlistitem, deleteId} = props
  const {id, imageUrl, name, genre, duration} = playlistitem
  const sendDeleteId = () => {
    deleteId(id)
  }
  return (
    <li className="play-item">
      <div className="first-sec">
        <img className="play-image" src={imageUrl} alt="track" />
        <div>
          <p>{name}</p>
          <p>{genre}</p>
        </div>
      </div>
      <div className="time-delete">
        <p>{duration}</p>
        <button onClick={sendDeleteId} testid="delete" type="button">
          Delete
        </button>
      </div>
    </li>
  )
}

export default Playitem

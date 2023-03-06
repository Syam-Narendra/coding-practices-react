import './index.css'

const GameImages = props => {
  const {imageData, getRandomMainImage} = props
  const {id, thumbnailUrl} = imageData
  const sendImageId = () => {
    getRandomMainImage(id)
  }
  return (
    <li>
      <button
        className="deleteButtDecoration"
        type="button"
        onClick={sendImageId}
      >
        <img alt="thumbnail" className="game-smaill-image" src={thumbnailUrl} />
      </button>
    </li>
  )
}
export default GameImages

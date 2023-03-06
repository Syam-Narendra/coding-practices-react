import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetailItem, changeImage, activeId} = props
  const {id, thumbnailUrl, thumbnailAltText} = thumbnailDetailItem

  const buttonClick = () => {
    changeImage(id)
  }
  const opacityCalssName = activeId ? '' : 'thumb-image'

  return (
    <li>
      <button className="button" type="button" onClick={buttonClick}>
        <img
          className={opacityCalssName}
          src={thumbnailUrl}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem

import './index.css'

const DestinationItem = props => {
  const {name, imgUrl} = props
  return (
    <li>
      <div className="item">
        <img className="image" src={imgUrl} alt={name} />
        <p>{name}</p>
      </div>
    </li>
  )
}
export default DestinationItem

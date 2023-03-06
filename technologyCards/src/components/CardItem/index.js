// Write your code here.
import './index.css'

const CardItem = props => {
  const {data} = props
  const {title, description, imgUrl, className} = data
  return (
    <li className={`cardItem ${className}`}>
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={imgUrl} alt={title} />
    </li>
  )
}
export default CardItem

import './index.css'

const PlanetItem = props => {
  const {data} = props
  const {name, imageUrl, description} = data
  return (
    <div>
      <h1>{name}</h1>
      <img className="image" src={imageUrl} alt={`planet ${name}"`} />
      <p>{description}</p>
    </div>
  )
}

export default PlanetItem

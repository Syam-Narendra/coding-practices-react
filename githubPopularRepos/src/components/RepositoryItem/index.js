import './index.css'

const RespositoryItem = props => {
  const {data} = props
  const {avatarUrl, forksCount, issuesCount, name, starsCount} = data
  //   console.log(data)
  return (
    <li className="item">
      <img className="avatar" src={avatarUrl} alt={name} />
      <h1>{name}</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
        alt="stars"
      />

      <p>{`${starsCount} Stars`}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
        alt="forks"
      />
      <p>{`${forksCount} forks`}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
        alt="open issues"
      />
      <p>{`${issuesCount} open issues`}</p>
    </li>
  )
}
export default RespositoryItem

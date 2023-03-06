import './index.css'

const SuggestionItem = props => {
  const {suggestion, upWardFun} = props
  const onClickFun = () => {
    upWardFun(suggestion)
  }
  return (
    <li className="items">
      <p>{suggestion}</p>
      <button onClick={onClickFun} className="button" type="button">
        <img
          alt="arrow"
          className="arrow"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png "
        />
      </button>
    </li>
  )
}
export default SuggestionItem

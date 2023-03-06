import './index.css'

const TransitionItem = props => {
  const {transcationItemDetails, deleteTranscation} = props
  const {id, newTitle, newAmount, newAmountType} = transcationItemDetails
  const onDeleteClick = () => {
    deleteTranscation(id, newAmount, newAmountType)
  }
  return (
    <li className="transcation-item">
      <p>{newTitle}</p>
      <p>{newAmount}</p>
      <p>{newAmountType}</p>
      <button
        testid="delete"
        onClick={onDeleteClick}
        className="delete-button"
        type="button"
      >
        <img
          className="delete-image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransitionItem

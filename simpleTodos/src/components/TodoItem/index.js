import './index.css'

const TodoItem = props => {
  const {title, id, onDelete} = props
  const onClickFun = () => {
    onDelete(id)
  }

  return (
    <li className="block">
      <p>{title}</p>
      <button onClick={onClickFun} className="button" type="button">
        Delete
      </button>
    </li>
  )
}

export default TodoItem

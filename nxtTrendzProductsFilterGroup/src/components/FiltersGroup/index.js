import './index.css'

const FiltersGroup = props => {
  const {dataItem, changeCategory} = props
  const sendId = () => {
    changeCategory(dataItem.categoryId)
  }
  return (
    <div className="filters-group-container">
      <button onClick={sendId} type="button">
        <p> {dataItem.name}</p>
      </button>
      {/* <p>{dataItem.name}</p> */}
    </div>
  )
}

export default FiltersGroup

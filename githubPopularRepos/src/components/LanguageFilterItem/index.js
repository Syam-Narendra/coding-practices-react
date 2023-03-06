import './index.css'

const LanguageFilterItem = props => {
  const {data, changeSelectedRepo} = props
  const {language, id} = data
  const sendLanguage = () => {
    changeSelectedRepo(id)
  }
  return (
    <li className="language-button">
      <button onClick={sendLanguage} type="button">
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem

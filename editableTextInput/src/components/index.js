import './index.css'
import {Component} from 'react'

class EditTextInput extends Component {
  state = {edit: true, buttonText: 'Save', inputText: ''}

  saveEdit = () => {
    const {edit} = this.state
    if (edit) {
      this.setState({edit: !edit, buttonText: 'Edit'})
    } else {
      this.setState({edit: !edit, buttonText: 'Save'})
    }
  }

  editInputValue = event => {
    this.setState({inputText: event.target.value})
  }

  render() {
    const {edit, buttonText, inputText} = this.state
    return (
      <div className="main">
        <div className="container">
          <h1>Editable Text Input</h1>
          <div className="text-box">
            {edit ? (
              <input
                className="text-input"
                type="text"
                onChange={this.editInputValue}
                value={inputText}
              />
            ) : (
              <p>{inputText}</p>
            )}
            <button type="button" onClick={this.saveEdit} className="button">
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default EditTextInput

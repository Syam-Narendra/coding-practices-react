import {v4} from 'uuid'
import {Component} from 'react'
import MoneyDetails from '../MoneyDetails/index'
import TransitionItem from '../TransactionItem/index'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]
let income = 0
let expences = 0
class MoneyManager extends Component {
  state = {
    transcationList: [],
    enteredTitle: '',
    enteredAmount: 0,
    incomeAmount: 0,
    expenceAmount: 0,
  }

  setTitle = event => {
    this.setState({enteredTitle: event.target.value})
  }

  setAmount = event => {
    this.setState({enteredAmount: parseInt(event.target.value)})
  }

  addTranscationItem = () => {
    const {transcationList, enteredTitle, enteredAmount} = this.state
    const amountType = document.getElementById('transcationType').value

    const newTranscation = {
      id: v4(),
      newTitle: enteredTitle,
      newAmount: enteredAmount,
      newAmountType: amountType,
    }

    if (amountType === 'INCOME') {
      income += enteredAmount
    } else {
      expences += enteredAmount
    }
    this.setState({
      transcationList: [...transcationList, newTranscation],
      incomeAmount: income,
      expenceAmount: expences,
      enteredAmount: '',
      enteredTitle: '',
    })
  }

  deleteTranscation = (id, restoreAmount, restoreAmountType) => {
    const {transcationList, incomeAmount, expenceAmount} = this.state
    const filterData = transcationList.filter(each => each.id !== id)
    if (restoreAmountType === 'INCOME') {
      income -= restoreAmount
    } else {
      expences -= restoreAmount
    }
    this.setState({
      transcationList: filterData,
      incomeAmount: income,
      expenceAmount: expences,
    })
  }

  render() {
    const {
      transcationList,
      enteredAmount,
      enteredTitle,
      incomeAmount,
      expenceAmount,
    } = this.state
    return (
      <>
        <div className="main">
          <div className="heading">
            <h1>Hi Richard</h1>
            <p>Welcome Back to your Money Manager</p>
          </div>
        </div>
        <div className="money-details">
          <MoneyDetails
            incomeAmount={incomeAmount}
            expenceAmount={expenceAmount}
          />
        </div>
        <div className="transcation-history">
          <div className="transcation">
            <h1>Add Transaction</h1>
            <form>
              <label htmlFor="title">TITLE</label>
              <br />
              <input
                onChange={this.setTitle}
                value={enteredTitle}
                className="input-type"
                id="title"
                placeholder="TITLE"
              />
              <br />
              <label htmlFor="amount">AMOUNT</label>
              <br />
              <input
                onChange={this.setAmount}
                value={enteredAmount}
                className="input-type"
                id="amount"
                placeholder="AMOUNT"
              />
              <br />
              <select id="transcationType">
                {transactionTypeOptions.map(each => (
                  <option key={each.optionId} value={each.optionId}>
                    {each.displayText}
                  </option>
                ))}
              </select>
              <br />
              <button
                onClick={this.addTranscationItem}
                className="add-button"
                type="button"
              >
                Add
              </button>
            </form>
          </div>
          <div className="history">
            <h1>History</h1>
            <div className="heading-container">
              <p>Title</p>
              <p>Amount</p>
              <p>Type</p>
              <p className="hide-delete">delete bh</p>
            </div>
            <ul id="transactions" className="transactions">
              {transcationList.map(each => (
                <TransitionItem
                  deleteTranscation={this.deleteTranscation}
                  transcationItemDetails={each}
                  key={each.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </>
    )
  }
}

export default MoneyManager

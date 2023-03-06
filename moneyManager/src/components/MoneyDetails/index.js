import './index.css'

const MoneyDetails = props => {
  const {incomeAmount, expenceAmount} = props
  return (
    <>
      <div className="bal-money-list">
        <img
          className="image-icon"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div>
          <p>Your Balance</p>
          <p testid="balanceAmount">{incomeAmount - expenceAmount}</p>
        </div>
      </div>
      <div className="bal-money-list">
        <img
          className="image-icon"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div>
          <p>Your Income</p>
          <p testid="incomeAmount">{incomeAmount}</p>
        </div>
      </div>
      <div className="bal-money-list">
        <img
          className="image-icon"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div>
          <p>Your Expenses</p>
          <p testid="expensesAmount">{expenceAmount}</p>
        </div>
      </div>
    </>
  )
}
export default MoneyDetails

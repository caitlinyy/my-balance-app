import { useContext, useState } from "react"
import { GlobalContext } from "../context/GlobalState"

const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext)
  const [text, setText] = useState("")
  const [amount, setAmount] = useState("")

  const onSubmit = (event) => {
    event.preventDefault()
    console.log(text, amount);
    const newTransaction = {
      id: Math.floor(Math.random() * 1000000000),
      text,
      amount: +amount,
    }
    addTransaction(newTransaction)
  }

  return (
    <div>
      <h3>Add New Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label>Transaction Item</label>
          <input
            type="text"
            value={text}
            onChange={(event) => setText(event.target.value)}
            id="TransactionItem"
            placeholder="Please enter your transaction item" />
        </div>
        <div className="form-control">
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            id="Amount"
            placeholder="Please enter the amount" />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </div>
  )
}

export default AddTransaction
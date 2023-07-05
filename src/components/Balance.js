import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../context/GlobalState"

const Balance = () => {
  const { transactions } = useContext(GlobalContext)

  //state 存transactions 数据
  const [balance, setBalance] = useState(0)

  useEffect(() => {
    const amounts = transactions.map((transaction) => transaction.amount)
    console.log('amounts', amounts);
    const totalAmounts = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)
    console.log(totalAmounts);
    setBalance(totalAmounts)
  }, [transactions])

  return (
    <div>
    <h2 id="balance">${balance}</h2>
    </div>
  )
}

export default Balance
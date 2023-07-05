import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

//state更新数据更新 
//initial state 定义了初始状态对象 initialState，其中包含了一些初始的交易记录。
const initialState = {
  transactions: [
    { id: 1, text: 'Flower', amount: -20 },
    { id: 2, text: 'Salary', amount: 1000 },
    { id: 3, text: 'Book', amount: -10 },
    { id: 4, text: 'Shop', amount: -50 },
  ]
}

//创建了一个全局上下文 GlobalContext 
//Create context createContext 函数创建了一个全局上下文 GlobalContext，并将 initialState 作为初始值传递给它。
export const GlobalContext = createContext(initialState)

//Provider Component 创建了一个全局提供者组件 GlobalProvider，它接受一个 children 属性作为子组件，并使用 useReducer 钩子来管理状态和派发操作
export const GlobalProvider = ({ children }) => {
  //在 useReducer 中，我们传递了一个名为 AppReducer 的 reducer 函数和 initialState 作为初始状态。这样，state 和 dispatch 就成为了全局提供者组件的一部分，可以在整个应用中访问和使用。
  const [state, dispatch] = useReducer(AppReducer, initialState)

  //actions
  //在 deleteTransaction 函数中，我们通过调用 dispatch 函数派发一个类型为 "DELETE_TRANSACTION" 的操作，并传递一个 payload 参数作为要删除的交易记录的 id。
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    })
  }


  //在 addTransaction 函数中，我们通过调用 dispatch 函数派发一个类型为 "ADD_TRANSACTION" 的操作，并传递一个 payload 参数作为要添加的交易记录。
  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    })
  }

  //在提供者组件的返回部分，我们使用 GlobalContext.Provider 将 state.transactions、deleteTransaction 和 addTransaction 作为上下文的值传递给子组件。这样，子组件就可以通过 useContext(GlobalContext) 来访问全局的状态和操作函数。
  return (
    //传value
    <GlobalContext.Provider 
    value={{ 
      transactions: state.transactions, 
      deleteTransaction, 
      addTransaction 
      }}>
      {children}
    </GlobalContext.Provider>
  )

}
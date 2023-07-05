const AppReducer = (state, action) => {
  switch (action.type) {
    //DELETE_TRANSACTION'，当 action.type 等于 'DELETE_TRANSACTION' 时，将会返回一个新的状态对象，其中的 transactions 数组会根据特定的条件进行过滤
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        //transactions 的改变 array filter 每个object transaction
        //数组的 filter 方法，根据每个 transaction 的 id 和 action.payload 进行比较，将不满足条件的 transaction 过滤掉。最终返回一个新的状态对象，其中的 transactions 数组不再包含被删除的 transaction
        transactions: state.transactions.filter((transaction) => transaction.id !== action.payload
        )
      };
    //action.type 等于 'ADD_TRANSACTION' 时，这段代码会返回一个新的状态对象，其中的 transactions 数组会进行更新
    case 'ADD_TRANSACTION':
      return {
        //将 action.payload 添加到 state.transactions 数组的开头，创建了一个新的数组。这样可以保证新的交易记录被添加到数组的最前面，而不是追加到末尾。最终返回的新的状态对象中，transactions 数组包含了新增的交易记录
        ...state,
        transactions: [action.payload, ...state.transactions],
      };

    default:
      return state;
  }
}

//add transaction and delete
//state更新数据更新

export default AppReducer
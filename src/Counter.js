import React, { useReducer, useEffect } from 'react'
import { reducer, initialState } from './reducers/counter'
import { counterActionCreator } from './actions/counter'

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const actions = counterActionCreator(dispatch)

  useEffect(() => { document.title = `🔢 ${state.count}` })

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={actions.reset}>Reset</button>
      <button onClick={actions.decrement}>-</button>
      <button onClick={actions.increment}>+</button>
    </div>
  )
}

export default Counter

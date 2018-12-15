export const counterActionCreator = dispatch => ({
  reset: () => dispatch({ type: 'reset' }),
  decrement: () => dispatch({ type: 'decrement' }),
  increment: () => dispatch({ type: 'increment' }),
})

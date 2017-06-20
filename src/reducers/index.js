export default function ingredientReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_INGREDIENT':
      return [...state, action.payload]
    case 'REMOVE_INGREDIENT':
      let newState = []
      state.forEach( item => {
        if ( item !== action.payload ) {
          newState.push(item)
        }
      })
      return newState
    default:
      return state

  }
}

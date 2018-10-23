const defaultState = {
  tournaments: {},
}

const app = (state = defaultState, action) => {
  switch (action.type) {
    case 'CREATE_TOURNAMENT':
      return {
        ...state,
        tournaments: {
          ...state.tournaments,
          [action.tournament.id]: action.tournament,
        },
      }
    default:
      return state
  }
}

export default app

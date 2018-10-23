const defaultState = {
  name: null,
}

const createTournament = (state = defaultState, action) => {
  switch (action.type) {
    case 'CREATE_TOURNAMENT_UPDATE_NAME':
      return {
        ...state,
        name: action.name,
      }
    case 'CREATE_TOURNAMENT':
      return {
        ...state,
        name: '',
      }
    default:
      return state
  }
}

export default createTournament

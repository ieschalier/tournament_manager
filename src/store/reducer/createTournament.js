const defaultState = {
  name: '',
}

const createTournament = (state = defaultState, action) => {
  switch (action.type) {
    case 'CREATE_TOURNAMENT_UPDATE_NAME':
      return {
        ...state,
        name: action.name,
      }
    default:
      return state
      break
  }
}

export default createTournament

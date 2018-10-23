// eslint-disable-next-line import/prefer-default-export
export const createTournamentUpdateName = name => ({
  type: 'CREATE_TOURNAMENT_UPDATE_NAME',
  name,
})

export const createTournament = name => ({
  type: 'CREATE_TOURNAMENT',
  tournament: {
    id: Date.now(),
    name,
  },
})

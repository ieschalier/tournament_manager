import { h } from 'preact'
import Router from 'preact-router'

import Main from './Main'
import CreateTournament from './CreateTournament'
import TournamentList from './TournamentList'

const App = () => (
  <Router>
    <Main path="/" />
    <CreateTournament path="/createtournament" />
    <TournamentList path="/tournamentlist" />
  </Router>
)

export default App

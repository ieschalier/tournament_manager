import { h } from 'preact'
import Router from 'preact-router'

import Main from './Main'
import CreateTournament from './CreateTournament'

const App = () => (
  <Router>
    <Main path="/" />
    <CreateTournament path="/createtournament" />
  </Router>
)

export default App

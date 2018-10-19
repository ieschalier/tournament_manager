/* @flow */
import { h } from 'preact'
import { connect } from 'react-redux'
import 'material-design-lite/material'
import { Button, TextField } from 'preact-mdl'

import a from '../store/action'
import { H1, MainContainer } from '../Common/style'

type Props = {
  name: string,
  updateName: string => void,
}

const CreateTournament = ({ name, updateName }: Props) => (
  <MainContainer>
    <header>
      <H1 style={{ textAlign: 'center', paddingTop: 30 }}>
        Tournament creation
      </H1>
    </header>
    <div
      style={{
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <TextField
        placeholder="Tournament name"
        label="Tournament name"
        value={name}
        onChange={e => updateName(e.target.value)}
        required
      />
      <Button>Create tournament</Button>
    </div>
  </MainContainer>
)

export default connect(
  p => ({ name: p.createTournament.name }),
  { updateName: a.createTournamentUpdateName },
)(CreateTournament)

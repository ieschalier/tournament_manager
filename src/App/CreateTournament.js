/* @flow */
import { h } from 'preact'
import { connect } from 'react-redux'
// import 'material-design-lite/material'
// import { Button, TextField } from 'preact-mdl'
import { Button, InputGroup, FormGroup } from '@blueprintjs/core'

import a from '../store/action'
import { H1, MainContainer } from '../Common/style'

type Props = {
  name: string,
  updateName: string => void,
}

const CreateTournament = ({ name, updateName }: Props) => {
  const intent = name === '' ? 'warning' : 'none'
  const helperText = name === '' ? 'Required name' : ''

  return (
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
        <FormGroup
          label="Tournament name"
          intent={intent}
          helperText={helperText}
        >
          <InputGroup
            placeholder="Type name here"
            value={name}
            intent={intent}
            onChange={e => updateName(e.target.value)}
            large
            required
          />
        </FormGroup>
        <Button disabled={!name} intent="primary" large>
          Create tournament
        </Button>
      </div>
    </MainContainer>
  )
}

export default connect(
  p => ({ name: p.createTournament.name }),
  { updateName: a.createTournamentUpdateName },
)(CreateTournament)

/* @flow */
import { h } from 'preact'
import { connect } from 'react-redux'
import { Button, InputGroup, FormGroup } from '@blueprintjs/core'
import { route } from 'preact-router'

import a from '../store/action'
import { MainContainer, MainCenter } from '../Common/style'
import Header from '../Common/Header'

type Props = {
  name: string,
  updateName: string => void,
  create: string => void,
}

const CreateTournament = ({ name, updateName, create }: Props) => {
  const intent = name === '' ? 'warning' : 'none'
  const helperText = name === '' ? 'Required name' : ''

  return (
    <MainContainer>
      <Header title="Tournament creation" />
      <MainCenter>
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
        <Button
          onClick={() => {
            create(name)
            route('/tournamentlist')
          }}
          disabled={!name}
          intent="primary"
          large
        >
          Create tournament
        </Button>
      </MainCenter>
    </MainContainer>
  )
}

export default connect(
  p => ({ name: p.createTournament.name }),
  {
    updateName: a.createTournamentUpdateName,
    create: a.createTournament,
  },
)(CreateTournament)

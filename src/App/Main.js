import { h } from 'preact'
import { AnchorButton } from '@blueprintjs/core'
import { H1, MainContainer } from '../Common/style'

const Main = () => (
  <MainContainer>
    <header>
      <H1 style={{ textAlign: 'center', paddingTop: 30 }}>
        Welcome to your tournament manager
      </H1>
    </header>
    <div
      style={{
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <AnchorButton href="/createtournament" intent="primary" minimal>
        Create tournament
      </AnchorButton>
    </div>
  </MainContainer>
)

export default Main

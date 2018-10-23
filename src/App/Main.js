import { h } from 'preact'
import { AnchorButton } from '@blueprintjs/core'
import { MainContainer, MainCenter } from '../Common/style'
import Header from '../Common/Header'

const Main = () => (
  <MainContainer>
    <Header title="Welcome to your tournament manager" />
    <MainCenter>
      <AnchorButton href="/createtournament" intent="primary" minimal>
        Create tournament
      </AnchorButton>
    </MainCenter>
  </MainContainer>
)

export default Main

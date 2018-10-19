import { h } from 'preact'
import 'material-design-lite/material'
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
      <a href="/createtournament">Create tournament</a>
    </div>
  </MainContainer>
)

export default Main

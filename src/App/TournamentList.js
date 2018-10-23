/* @flow */
import { h, Component } from 'preact'
import { connect } from 'react-redux'
import { route } from 'preact-router'

import { MainContainer, MainCenter } from '../Common/style'
import Header from '../Common/Header'

type Props = {
  tournaments: {
    [id: string]: {
      id: number,
      name: string,
    },
  },
}

class TournamentList extends Component<Props> {
  componentDidMount() {
    const { tournaments } = this.props
    if (Object.keys(tournaments).length === 0) {
      route('/createtournament')
    }
  }

  render() {
    return (
      <MainContainer>
        <Header title="Manage your tournament" />
        <MainCenter />
      </MainContainer>
    )
  }
}

export default connect(s => ({ tournaments: s.data.tournaments }))(
  TournamentList,
)

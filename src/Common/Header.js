/* @flow */
import { h } from 'preact'
import { H1 } from './style'

type Props = {
  title: string,
}

const Header = ({ title }: Props) => (
  <header>
    <H1 style={{ textAlign: 'center', paddingTop: 30 }}>{title}</H1>
  </header>
)

export default Header

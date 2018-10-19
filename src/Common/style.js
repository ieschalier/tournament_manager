import { h } from 'preact'
import picostyle from 'picostyle'

const style = picostyle(h)

export const MainContainer = style('div')({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  position: 'relative',
})

export const H1 = style('h1')({
  color: '#2D9CDB',
  fontSize: '24px',
  textAlign: 'center',
  paddingTop: 30,
})

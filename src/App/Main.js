import preact, { Component } from 'preact'
import mdl from 'material-design-lite/material'
import { Button } from 'preact-mdl'
console.log(Button)

const Main = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
      position: 'relative',
    }}
  >
    <header>
      <h1 style={{ textAlign: 'center', paddingTop: 30 }}>
        Welcome to your tournament manager
      </h1>
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
  </div>
)

export default Main

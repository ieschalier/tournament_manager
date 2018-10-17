import preact, { render } from 'preact'
import { hot } from 'react-hot-loader'
import 'preact/devtools'
import App from './App'

const HotApp = hot(module)(App)

render(<HotApp />, document.body)

import { render, h } from 'preact'
import { hot } from 'react-hot-loader'
import { Provider } from 'react-redux'
import 'preact/devtools'

import store from './store'

import App from './App'

const HotApp = hot(module)(App)

render(
  <Provider store={store}>
    <HotApp />
  </Provider>,
  document.body,
)

import { render, h } from 'preact'
import { Provider } from 'react-redux'
import 'preact/devtools'

import store from './store'

import App from './App'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.body,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import Rout from './Router'
import { Provider } from 'react-redux'
import { store } from './redux/Store'
import { Analytics } from '@vercel/analytics/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Rout />
    </Provider>
    <Analytics />
  </React.StrictMode>,
)

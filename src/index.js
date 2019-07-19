import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import Unsplash from 'unsplash-js'

export const unsplash = new Unsplash({
  applicationId: process.env.REACT_APP_APP_ID,
  secret: process.env.REACT_APP_APP_SECRET
})

ReactDOM.render(<App />, document.getElementById('root'))
serviceWorker.unregister()

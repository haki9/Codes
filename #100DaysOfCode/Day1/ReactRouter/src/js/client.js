import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import Layout from './pages/Layout'
import Feature from './pages/Feature'
import Setting from './pages/Setting'

const app = document.getElementById('app')

const router = (
  <Router history={hashHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Feature}></IndexRoute>
      <Route path='setting' component={Setting}></Route>
    </Route>
  </Router>
)
ReactDOM.render(
  router,
  app
)

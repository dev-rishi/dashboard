import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home/Home'

const Pages = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/first'>
        <p>First</p>
      </Route>
    </Switch>
  )
}

export default Pages

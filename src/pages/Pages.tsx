import React from 'react'
import { Switch, Route } from 'react-router-dom'

const Pages = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <p>Home</p>
      </Route>
      <Route path='/first'>
        <p>First</p>
      </Route>
    </Switch>
  )
}

export default Pages

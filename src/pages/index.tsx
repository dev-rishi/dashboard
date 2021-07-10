import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import DashboardDetails from './DashboardDetails/DashboardDetails'
import Home from './Home/Home'

export interface IRouteParams {
  dashBoardHome: string
  dashboardName?: string
}

const Pages = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Redirect to='/Core Infrastructure' />
      </Route>
      <Route exact path='/:dashBoardHome'>
        <Home />
      </Route>
      <Route path='/:dashBoardHome/:dashboardName'>
        <DashboardDetails />
      </Route>
    </Switch>
  )
}

export default Pages

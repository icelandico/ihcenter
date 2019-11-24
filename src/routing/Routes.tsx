import * as React from "react"
import { Switch, Route } from "react-router-dom"
import HomePage from "../views/pages/HomePage/home-page"
import Timeline from "../views/pages/Timeline/timeline"

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/timeline" component={Timeline} />
      <Route exact path="/diagram" component={HomePage} />
    </Switch>
  )
}

export default Routes

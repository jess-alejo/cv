import React, { Component } from "react"
import { Switch, Route, Redirect } from "react-router-dom"

import Home from "./home"
import Work from "./work"
import Projects from "./projects"
import Interests from "./interests"
import Skills from "./skills"
import Education from "./education"
import About from "./about"
import NotFound from "./notFound"

const RouteMap = () => {
  return (
    <Switch>
      <Route path="/work" component={Work} />
      <Route path="/projects" component={Projects} />
      <Route path="/interests" component={Interests} />
      <Route path="/skills" component={Skills} />
      <Route path="/education" component={Education} />
      <Route path="/about" component={About} />
      <Route path="/not-found" component={NotFound} />
      <Route path="/" exact component={Home} />
      <Redirect from="/home" to="/" />
      <Redirect from="*" to="not-found" />
    </Switch>
  )
}

export default RouteMap

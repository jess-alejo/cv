import { BrowserRouter as Router } from "react-router-dom"

import Sidebar from "./components/sidebar"

import "./App.css"
import RouteMap from "./components/routeMap"

function App() {
  return (
    <Router>
      <Sidebar />
      <RouteMap />
    </Router>
  )
}

export default App

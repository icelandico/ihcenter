import * as React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="top-navbar">
      <ul>
        <li>
          <Link to="/">Main</Link>
        </li>
        <li>
          <Link to="/timeline">Timeline</Link>
        </li>
        <li>
          <Link to="/diagram">Diagram</Link>
        </li>
        <li>
          <Link to="/list">List</Link>
        </li>
        <li>
          <Link to="/compare">Compare</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
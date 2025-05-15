import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {

  return (
      <nav>
          <ul>
            <li>
              <NavLink exact activeClassName="active" to="/">Home</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/howitworks">How It Works</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/signup">Signup</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/postjob">Post a Job</NavLink>
            </li>
          </ul>
      </nav>
  )
}
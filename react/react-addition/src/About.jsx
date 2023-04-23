import React from 'react'
import {Link, Outlet} from 'react-router-dom'

const About = () => {
  return (
    <div>
       <h1>About us:</h1>
       <ul>
          <li><Link to="contacts">Our team:</Link></li>
          <li><Link to="form">Our form:</Link></li>
       </ul>
         <Outlet/>
   </div>
  )
}

export default About
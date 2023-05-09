import React from 'react'
import NavBar from './NavBar'
import Appetizers from './Appetizers'
import { appetizer } from './dishes'
const Home = () => {
  return (
    <div>
    <div id="navbar">
        <NavBar/>
    </div>
    <div>
    <Appetizers data={appetizer}/>
   </div>
    </div>
  )
}

export default Home
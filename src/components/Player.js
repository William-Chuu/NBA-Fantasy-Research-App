import React from 'react'
import PropTypes from 'prop-types'
import PlayerItem from './PlayerItem'

export default function Player({Players, delPlayer}) {
    console.log(Players);
  return (
    // for each loop kinda, for each todo we map through what we want to display (loop through todos)
    // maps creates a list(dict) which needs a key for each value 
    <div>
    {Players.map((Player) => (
        <PlayerItem key={Player['name']} Player={Player} delPlayer={delPlayer}/>
        ))
    }
    </div>
  )
}

// //array of objects
// Todos.propTypes = {
//   todos: PropTypes.array.isRequired,
//   markComplete: PropTypes.func.isRequired,
//   delTodo:  PropTypes.func.isRequired
// }

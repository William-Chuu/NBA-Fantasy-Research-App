import React, {useState} from 'react'
import PropTypes from 'prop-types'
import './AddPlayer.css'

export default function AddPlayer({addPlayer}) {
    // want new todo to be a new state
    // COMPONENT level state vs app level
    const [Name, setName] = useState('')
    
    // event parameter
    // if have multiple inputs [e.target.name] and name should = state name
    function onChange(e) {
        // state will change dynamicaly to what is in input field
        setName(e.target.value)
    }
    
    function onSubmit(e) {
        // to prevent from submitting to actual file
        e.preventDefault();
        addPlayer(Name);
        // clear field after submitting
        setName('')
    }

    return (
        <React.Fragment>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous"></link>
        <form onSubmit={onSubmit}>
            <input
                type='text' 
                name='Name' 
                placeholder='Player Name ...'
                // = the state
                value={Name}
                // when enter text
                onChange={onChange}
            />
            <i className="fa fa-search"
                type='submit'
                value='Submit'
                onClick={onSubmit}
            >
            </i>
        </form>
        </React.Fragment>
    )
}

// // Proptypes
// AddTodo.propTypes = {
//     addTodo: PropTypes.func.isRequired
// }



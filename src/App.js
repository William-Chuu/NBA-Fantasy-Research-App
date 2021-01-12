import React, {useState, useEffect} from 'react'
import Player from './components/Player'
import Injuries from './components/Injuries'
import AddPlayer from './components/AddPlayer'
import Axios from 'axios'
import './App.css'
import styled from 'styled-components'
import ReactDOM from "react-dom";
import { Ring } from "react-awesome-spinners";


 const StyledDiv = styled.div

function App() {
  const [Players, setPlayers] = useState([{'name': 'Zion Williamson', 'HS': 'https://d2cwpp38twqe55.cloudfront.net/req/202006192/images/players/willizi01.jpg', 'salary': {'Player': {116: 'Zion Williamson'}, 'Tm': {116: 'NOP'}, '2020-21': {116: '$10,245,480'}, '2021-22': {116: '$10,733,400'}, '2022-23': {116: '$13,534,817'}, '2023-24': {116: ''}, '2024-25': {116: ''}, '2025-26': {116: ''}, 'Signed Using': {116: '1st Round Pick'}, 'Guaranteed': {116: '$20,002,920'}}, 'stats': {'SEASON': {0: '2019-20'}, 'AGE': {0: 19.0}, 'TEAM': {0: 'NOP'}, 'LEAGUE': {0: 'NBA'}, 'POS': {0: 'PF'}, 'G': {0: 24}, 'GS': {0: 24}, 'MP': {0: 27.8}, 'FG': {0: 8.8}, 'FGA': {0: 15.0}, 'FG%': {0: 0.58}, '3P': {0: 0.3}, '3PA': {0: 0.6}, '3P%': {0: 0.43}, '2P': {0: 8.5}, '2PA': {0: 14.4}, '2P%': {0: 0.59}, 'eFG%': {0: 0.59}, 'FT': {0: 4.8}, 'FTA': {0: 7.4}, 'FT%': {0: 0.64}, 'ORB': {0: 2.7}, 'DRB': {0: 3.6}, 'TRB': {0: 6.3}, 'AST': {0: 2.1}, 'STL': {0: 0.7}, 'BLK': {0: 0.4}, 'TOV': {0: 2.5}, 'PF': {0: 1.8}, 'PTS': {0: 22.5}}}])
  const [Injury, setInjury] = useState([])
  const [loading, setLoading] = useState(false)

  // useEffect(() => {
  //   Axios.get('/player')
  //   .then(Response => (setPlayers([...Players, Response.data])))
  // }, [setPlayers]);

  // console.log(Players)

  useEffect(() => {
    Axios.get('https://nba-fantasy-app.herokuapp.com/injuries')
    .then(Response => (Response.data))
    .then(data => (setInjury(data)))
  }, [setInjury]);

  // console.log(Injury)

  // return todos that DO NOT match the id 
  function delPlayer(Name) {
    // .filter() returns another array, never good to mutate state
    // for each player object in Players, checks if name DOES NOT equal passed Name. If true, adds to new array. (gets rid of objects that have the same name)
      setPlayers(Players.filter(Player => Player['name'] !== Name))
      // console.log(Players)
  }

  // *** need to pass as JSON file
  function addPlayer(Name) {
    var myParams = {
      data: Name
    }
    if (Name == "") {
      alert("The search query cannot be empty")
    }
    else {
      setLoading(true);
      Axios.post('https://nba-fantasy-app.herokuapp.com/player', myParams)
      .then(function(response){
        console.log(response.data);
        // if get 204 error back (no content)
        if (response.data == '') {
          alert("Please enter a valid player name")
          setLoading(false);
          return;
        }
        setLoading(false);
        // add response to end of what we already have in state
        setPlayers([...Players, response.data]);
      })
      .catch(function(error){
        setLoading(false);
        console.log(error);
      })
    }
  }
  
  return (
    <div>
      <React.Fragment>
        <div style={{marginTop: '5%', marginBottom: '2%', position:'relative', display:'flex', flexDirection:'column', alignItems:'center'}}>
          <AddPlayer addPlayer={addPlayer}/>
          {loading && <Ring></Ring>}
        </div>
        <div>
          <Player Players={Players} delPlayer={delPlayer}/>
        </div>
        <div style={{margin: '10%'}}>
          <Injuries Injury={Injury}/>
        </div>
        </React.Fragment>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;

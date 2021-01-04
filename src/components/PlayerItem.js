import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { DataGrid } from '@material-ui/data-grid'

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default function PlayerItem({Player, delPlayer}) {
    const {HS, name, salary, stats} = Player;

    console.log(Player);

    // column names
    const salary_keys = Object.keys(salary);

    const useStyles = makeStyles({
        table: {
          minWidth: 700,
        },
    });

    const classes = useStyles();

    const stats_keys = Object.keys(stats);
    const num_stats_keys = stats_keys.length;
    console.log(stats_keys);
    console.log(num_stats_keys);
    const columns = [];

    // salary table
    for (let i = 0; i < num_stats_keys; i++) {
        columns.push({ field: 'id', field: stats_keys[i], headerName: stats_keys[i], width: 100, fontSize: '10px'});
    }

    // number of rows
    // console.log(Object.keys(stats[stats_keys[0]]).length);
    // player stats
    const rows = [];

    for (let i = 0; i < Object.keys(stats[stats_keys[0]]).length; i++) {
        const temp = {};
        temp['id'] = i;
        // number of columns
        for (let j = 0; j < num_stats_keys; j++) {
            // loop through each stat, getting the ith (or row th) stat
            temp[stats_keys[j]] = stats[stats_keys[j]][i];
        }
        rows.push(temp);
    }

    var instructions = "";
    if (Object.keys(Player).length == 0) {
        instructions = "Search a player's name to see their info!";
    }

    const StyledWidget = styled.div `
    position: relative;
    background: white;
    margin-left: 10%; 
    margin-right: 10%;
    margin-bottom: 5%;
    border-radius: 25px;
    border: 0px;
    padding: 1%;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 1)
    `;

    const StyledHeader = styled.div `
    position: relative;
    margin-bottom: 0%;
    `;

  return (
      <React.Fragment>
        <StyledWidget>
            <h1>
                {instructions}
            </h1>
            <StyledHeader>
                <p>
                    <h1 style={{fontFamily:'Trebuchet MS',fontSize:'40px', position:'absolute', top:'-18%', left:'43%'}}>{name}</h1>
                    <i onClick = { delPlayer.bind(this,name) } class="fas fa-trash-alt" style = {{float:'right', fontSize:'1.5em', cursor:'pointer'}}></i>
                </p>
    
                <img src={HS} alt={name} style={{position:'relative', left:'1%', top:'-3%', transform:'translate(0%,-10%)'}}></img>
            
                <TableContainer component={Paper} style={{position:'absolute', top:'50%', left:'12%', resize:'both', overflow:'auto', width:'88%'}}>
                <Table className={classes.table} size="small" aria-label="a dense table">
                    <TableHead>
                    <TableRow>
                        {
                            salary_keys.map((keys) => (
                                <TableCell key={keys} align="left"> {keys} </TableCell>
                            ))
                        }
                    </TableRow>
                    </TableHead>

                    <TableBody>
                    {salary_keys.map((keys) => (
                        <TableCell key={keys} align="left">{ salary[keys][Object.keys(salary[keys])[0]] }</TableCell>                    
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
            </StyledHeader>

            <div style={{ height: 250, width: '100%'}}>
                <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection/>
            </div>
        </StyledWidget>
      </React.Fragment>
  )
}

const btnStyle = {
    // red
    background: '#ff0000',
    // white
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

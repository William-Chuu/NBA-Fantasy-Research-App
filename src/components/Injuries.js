import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

export default function Injuries({Injury}) {
    const classes = useStyles();

    if (!Injury || (Array.isArray(Injury) && Injury.length == 0)) {
      return <div></div>;
    }
    
    // console.log(Injury);
    const rows = [];
    // Array of values
    const valueDicts = Object.values(Injury);
    const numValues = Object.keys(valueDicts[0]).length;
    // console.log(valueDicts);
    // console.log(numValues);
    
    for (let i = 0; i < numValues; i++) {
      rows.push([]);
    }
    
    Object.keys(Injury).map(key => {
      // name, object
      // console.log(key, Injury[key]);
      let objectData = Injury[key]
      // index = 0-11
      Object.keys(objectData).map(index => {
        rows[index].push(objectData[index]);
      });
    });
    // console.log(rows);
    // console.log(Injury);
    // console.log(Object.keys(Injury));
    // console.log(Object.keys(Injury)[0]);
    // console.log(Injury[Object.keys(Injury)[0]]);
    //console.log(Object.keys(Injury[Object.keys(Injury)[0]]));
    return (
        <TableContainer component={Paper} style={{boxShadow: '0 -2px 10px rgba(0, 0, 0, 1)', display: 'inline-block', overflowY:'scroll', maxHeight:'600px'}}>
          <Table className={classes.table} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                { Object.keys(Injury).map((key) => (
                <TableCell key={key} align="left">{ key }</TableCell>
                ))
                }
              </TableRow>
            </TableHead>
            <TableBody>
          {rows.map((row) => (
            <TableRow key={row[3]}>
              {row.map((i) => (
                <TableCell key={i} align="left">{i}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
          </Table>
        </TableContainer>
      );
}

//array of objects
// Injuries.propTypes = {
//   todos: PropTypes.array.isRequired,
//   markComplete: PropTypes.func.isRequired,
//   delTodo:  PropTypes.func.isRequired
// }

import React from 'react';
import { fixedISO } from '../libraries/libraries'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export function Results(props) {
  return (
    <div>
    {props.data.length > 0 ?
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Amount</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Last 4 numbers</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { props.data.map( (element, index) =>
              <TableRow key={index}>
                <TableCell>
                  { element.amount.toFixed(2)}
                </TableCell>
                <TableCell>
                  { fixedISO(element.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',  }) } - { fixedISO(element.date).toLocaleTimeString('en-US') }
                </TableCell>
                <TableCell>{ element.card_last_four }</TableCell>
              </TableRow>
          )}
        </TableBody>
      </Table> : <div>No results!</div>
    }
    </div>
  );
}
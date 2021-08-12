import React, { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const DisplayList = () => {
  const classes = useStyles();
  const [teachers] = useState([
    {
      id: 1,
      firstName: 'Ciel',
      lastName: 'James',
      email: 'cj@gmail.com',
      subject: 'Computer',
    },
    {
      id: 1,
      firstName: 'James',
      lastName: 'Smith',
      email: 'jsmith@gmail.com',
      subject: 'English',
    },
    {
      id: 1,
      firstName: 'Andrew',
      lastName: 'Jones',
      email: 'andrewjones@gmail.com',
      subject: 'Science',
    },
    {
      id: 1,
      firstName: 'Mary',
      lastName: 'Doe',
      email: 'mdoe@gmail.com',
      subject: 'Cooking',
    },
    {
      id: 1,
      firstName: 'Miriam',
      lastName: 'Fercy',
      email: 'mfercy@gmail.com',
      subject: 'Math',
    },
  ]);

  return (
    <>
      {/* <table>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Subject</th>
        </tr>
        {teachers.map(teacher => (
          <tr>
            <td>{teacher.firstName}</td>
            <td>{teacher.lastName}</td>
            <td>{teacher.email}</td>
            <td>{teacher.subject}</td>
          </tr>
        ))}
      </table> */}

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>First Name</StyledTableCell>
              <StyledTableCell>Last Name</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell>Subject</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {teachers.map(teacher => (
              <StyledTableRow key={teacher.name}>
                <StyledTableCell component="th" scope="row">
                  {teacher.firstName}
                </StyledTableCell>
                <StyledTableCell>{teacher.lastName}</StyledTableCell>
                <StyledTableCell>{teacher.email}</StyledTableCell>
                <StyledTableCell>{teacher.subject}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default DisplayList;

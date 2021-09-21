import * as React from 'react';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {IRelatedRoute} from "../model/IRelatedRoute";
import Passengers from "./Passengers";

function Row(props: { row: IRelatedRoute, dateFrom: Date | null}) {
  const { row, dateFrom } = props;
  const [open, setOpen] = React.useState(false);


  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.name}</TableCell>
        <TableCell align="right">{row.carrier_name}</TableCell>
        <TableCell align="right">{row.carrier_phone}</TableCell>
        <TableCell align="right">{row.number}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            {open && <Passengers dateFrom={dateFrom} row={row}/>}
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

type SelectedRoutesTableType = {
  rows: readonly IRelatedRoute[];
  dateFrom: Date | null;
}

export default function SelectedRoutesTable(props: SelectedRoutesTableType) {
  const {rows, dateFrom} = props;

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />

            <TableCell>Name</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Carrier Name</TableCell>
            <TableCell align="right">Carrier Phone</TableCell>
            <TableCell align="right">Number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.id} row={row} dateFrom={dateFrom}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

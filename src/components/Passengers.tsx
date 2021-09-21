import React from "react";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import {Box, Button, Collapse} from "@mui/material";
import useGlobalContext from "../hooks/useGlobalContext";
import {useQuery} from "react-query";
import ISheets from "../model/ISheets";
import Api from "../api/Api";
import {IRelatedRoute} from "../model/IRelatedRoute";
import IPlace from "../model/IPlace";
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

function Row(props: { place: IPlace }) {
  const {place} = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <ListItemButton onClick={() => setOpen(!open)}>
        <ListItemText primary={`Place - ${place.place}. ${place.first_name} ${place.last_name}`}/>
        <Button>
          More Details
        </Button>
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Box sx={{margin: 1}} paddingTop={1} paddingBottom={2}>
          <Table size="small" aria-label="purchases">
            <TableHead>
              <TableRow>
                <TableCell align="right">First Name</TableCell>
                <TableCell align="right">Last Name</TableCell>
                <TableCell align="right">Phone</TableCell>
                <TableCell align="right">Paid Form</TableCell>
                <TableCell align="right">Ticket Number</TableCell>
                <TableCell align="right">Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow key={place.place}>
                <TableCell align="right">{place.first_name}</TableCell>
                <TableCell align="right">{place.last_name}</TableCell>
                <TableCell align="right">{place.phone}</TableCell>
                <TableCell align="right">{place.paid_form_name}</TableCell>
                <TableCell align="right">{place.ticket_number}</TableCell>
                <TableCell align="right">{place.price}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      </Collapse>

    </React.Fragment>
  );
}

function dateString(date: Date | null): string {
  return date ? `${date.getFullYear()}-${date.getMonth() > 9 ? date.getMonth() : '0' + date.getMonth()}-${date.getDate() > 9 ? date.getDate() : '0' + date.getDate()}` : ''
}

const Passengers = (props: { dateFrom: Date | null, row: IRelatedRoute }) => {
  const {row, dateFrom} = props;
  const {state} = useGlobalContext()
  const query = useQuery<ISheets, Error>(`passengers${dateFrom}`, async () => {
    return (await Api.sheets(dateString(dateFrom), row.id, state.user.access_token)).data
  })

  let places: IPlace[] = query?.data?.item.transports.map(transport => transport.places.filter(place => place.status === 'sold')).flat() ?? []

  if (query.isLoading) {
    return <>
      loading
    </>
  }

  return <Box sx={{margin: 1}}>
    <Typography variant="h6" gutterBottom component="div">
      Passengers. Count - {places.length}
    </Typography>
    <List
      sx={{width: '100%', bgcolor: 'background.paper'}}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Nested List Items
        </ListSubheader>
      }
    >
      {places.map(place => place.status === 'sold' && (
        <Row key={place.place} place={place}/>
      ))}
    </List>
  </Box>
}
export default Passengers
import * as React from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import Tooltip from '@mui/material/Tooltip';
import {IRelatedRoute} from "../model/IRelatedRoute";
import {Button} from "@mui/material";

interface HeadCell {
  disablePadding: boolean;
  id: keyof IRelatedRoute;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Name',
  },
  {
    id: 'carrier_name',
    numeric: true,
    disablePadding: false,
    label: 'Carrier Name',
  },
  {
    id: 'carrier_phone',
    numeric: true,
    disablePadding: false,
    label: 'Carrier Phone',
  },
  {
    id: 'number',
    numeric: true,
    disablePadding: false,
    label: 'Number',
  }
];

interface EnhancedTableProps {
  numSelected: number;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { onSelectAllClick, numSelected, rowCount } =
    props;


  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

interface EnhancedTableToolbarProps {
  numSelected: number;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const EnhancedTableToolbar = (props: EnhancedTableToolbarProps) => {
  const { numSelected,setOpen } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Nutrition
        </Typography>
      )}
      {numSelected > 0 ? (
        <Tooltip title={''}>
          <Button onClick={() => setOpen(true)}>
            Get Information
          </Button>
        </Tooltip>
      ) : null}
    </Toolbar>
  );
};
type RelatedRoutesTableProps = {
  rows: IRelatedRoute[];
  selected: readonly IRelatedRoute[];
  setSelected: React.Dispatch<React.SetStateAction<readonly IRelatedRoute[]>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function RelatedRoutesTable(props: RelatedRoutesTableProps) {
  const { rows, selected, setSelected, setOpen } = props;

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setSelected(rows);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, selectedItem: IRelatedRoute) => {
    const selectedIndex = selected.find((el) => el.id === selectedItem.id);
    let newSelected: readonly IRelatedRoute[] = [];
    if (!selectedIndex) {
      newSelected = newSelected.concat(selected, selectedItem)
    } else {
      newSelected = selected.filter((el) => el.id !== selectedItem.id)
    }
    setSelected(newSelected);
  };

  const isSelected = (id: number) => !!selected.find((el) => el.id === id);

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} setOpen={setOpen}/>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
          >
            <EnhancedTableHead
              numSelected={selected.length}
              onSelectAllClick={handleSelectAllClick}
              rowCount={rows.length}
            />
            <TableBody>
              {rows
                .map((row, index) => {
                  const isItemSelected = isSelected(row.id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.carrier_name}</TableCell>
                      <TableCell align="right">{row.carrier_phone}</TableCell>
                      <TableCell align="right">{row.number}</TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

    </Box>
  );
}

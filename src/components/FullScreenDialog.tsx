import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import {IRelatedRoute} from "../model/IRelatedRoute";
import SelectedRoutesTable from "./SelectedRoutesTable";
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import {DesktopDatePicker} from "@mui/lab";
import {Stack} from "@mui/material";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children?: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog(props: {selectedRows: readonly IRelatedRoute[], open: boolean, setOpen:  React.Dispatch<React.SetStateAction<boolean>>}) {
  const {selectedRows, open, setOpen} = props;
  const [dateFrom, setDateFrom] = React.useState<Date | null>(new Date());

  const handleClose = () => {
    setOpen(false);
  };

  return (
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Stack spacing={3} padding={2}>
                <DesktopDatePicker
                  label="Date desktop"
                  inputFormat="yyyy-MM-dd"
                  value={dateFrom}
                  onChange={(newValue) => {
                    setDateFrom(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Stack>
            </LocalizationProvider>

          </Toolbar>
        </AppBar>
        {!!selectedRows.length && <SelectedRoutesTable rows={selectedRows} dateFrom={dateFrom}/>}
      </Dialog>
  );
}

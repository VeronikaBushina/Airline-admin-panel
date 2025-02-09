
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Datetime from "react-datetime";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  makeStyles
} from '@material-ui/core';
import {
  FormGroup,
  Container,
  Modal,
  ModalBody,
  Row,
  Col,
  UncontrolledTooltip,
  PopoverBody,
  PopoverHeader,
  UncontrolledPopover,
} from "reactstrap";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles((theme) => ({
  root: {},
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

const Toolbar = ({ className, ...rest }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div 
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Box
        display="flex"
      >
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Button
              color="primary"
              variant="contained"
              onClick={handleClickOpen}
              fullWidth
            >
              Add passenger
            </Button>
          
          </GridItem>
        </GridContainer>
          <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Passenger Add</DialogTitle>
          <DialogContent>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Name"
                    type="email"
                    variant="outlined"
                  />
              
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                    <form className={classes.container} noValidate>
                      <TextField
                        variant="outlined"
                        id="date"
                        label="Birthday"
                        type="date"
                        defaultValue="2017-05-24"
                        className={classes.textField}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </form>
              </GridItem>
            </GridContainer>
                
              
            
            <TextField
              margin="dense"
              id="name"
              label="Address"
              type="email"
              fullWidth
              variant="outlined"
            />
            <GridContainer>
              <GridItem>
                  <TextField
                    margin="dense"
                    id="name"
                    label="Passport"
                    type="email"
                    fullWidth
                    variant="outlined"
                  />
              </GridItem>
              <GridItem>
                    <TextField
                        margin="dense"
                        id="name"
                        label="Seat Number"
                        type="email"
                        fullWidth
                        variant="outlined"
                    />
              </GridItem>
            </GridContainer>
            
            
            <TextField
              margin="dense"
              id="name"
              label="Acillary Services"
              type="email"
              fullWidth
              variant="outlined"
            />            
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleClose} color="primary" variant="contained">
              ADD
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
      
    </div>
  );
};

Toolbar.propTypes = {
  className: PropTypes.string
};

export default Toolbar;

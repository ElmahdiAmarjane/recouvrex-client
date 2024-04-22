import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { Alert, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';


export default function AlertDialog({setAlertDialogOpen,deleteDueDate,dueDateId,isOpen}) {
    

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

   const handleClose = () => {
    setAlertDialogOpen(false);
   };

  return (
    <React.Fragment>
      <Dialog
        open={isOpen}
        // onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
           <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        
      
       <Alert severity="warning">Attention</Alert>

        <DialogContent>
<DialogContentText id="alert-dialog-description" style={{ color: 'black' }}>
La suppression de la facture entraînera également la suppression des règlements liés à cette facture.
</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>Annuler la suppression </Button>
          <Button  onClick={()=>deleteDueDate(dueDateId)}   variant="outlined" color="error" >
          Supprimer quand même
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

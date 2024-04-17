import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
// import TextField from "@mui/material/TextField";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { TextField } from "@mui/material";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    // marginTop: "-30vh",
  },
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function RaisonsDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const raisons = [
    {
      id: 1,
      label: "Décès/invalidité",
      value: "deces_invalidite",
    },
    {
      id: 2,
      label: "Difficulté de paiement",
      value: "difficulte_de_paiement",
    },
    {
      id: 3,
      label: "Difficulté d'entreprise/projet",
      value: "difficulte_entreprise_projet",
    },
    {
      id: 4,
      label: "Injoignable provisoire",
      value: "injoignable_provisoire",
    },
    {
      id: 5,
      label: "Injoignable définitif",
      value: "injoignable_definitif",
    },
    {
      id: 6,
      label: "Refus de paiement",
      value: "refus_de_paiement",
    },
  ];

  return (
    <React.Fragment>
      <Button
        onClick={handleClickOpen}
        size="small"
        variant="contained"
        sx={{ backgroundColor: "orange" }}
      >
        Résultat de suivi
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          
          <Typography variant="h4">Raisons</Typography>
        </DialogTitle>
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
        <DialogContent dividers>
          {/* ----------- */}
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Raisons prédéfinies</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              {raisons.map((raison) => (
                <FormControlLabel
                  value={raison.value}
                  control={<Radio />}
                  label={raison.label}
                  key={raison.id}
                />
              ))}
            </RadioGroup>
          </FormControl>
          {/* ----------- */}
          <TextField
                // size="small"
                id="Commentaire"
                label="Commentaire"
                multiline
                rows={4}
                fullWidth
              />
        </DialogContent>
        <DialogActions>
          <Button autoFocus variant="contained" onClick={handleClose}>
            Enregistrer
          </Button>
          <Button autoFocus onClick={handleClose}>
            Fermer
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}

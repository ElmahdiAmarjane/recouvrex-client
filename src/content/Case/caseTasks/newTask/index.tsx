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
import AddIcon from "@mui/icons-material/Add";
import { Tooltip } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Autocomplete from "@mui/material/Autocomplete";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));



export default function NewTask() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [alignment, setAlignment] = React.useState("Tache");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };

  const projects = [
    { label: "COLO00000057" },
   "COLO00000058",
   "COLO00000059",
   "COLO00000060",
  ];

  const Proprietaires = [
   "y.elhaddaoui.ADMIN@arrawaj",
   "a.hamidi.ADMIN@arrawaj",
   "s.so3ada.user@arrawaj",
  ];

  const profiles = [
   "profile 1",
   "profile 2",
   "profile 3",
  ];

  return (
    <React.Fragment>
      <Tooltip arrow title="Nouvelle tâche">
        <IconButton onClick={handleClickOpen} size="large">
          <AddIcon sx={{ color: "green" }} fontSize="small" />
        </IconButton>
      </Tooltip>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          <Typography variant="h3">Nouvelle tâche</Typography>
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
        {/* -------------------------------------- */}
        <DialogContent dividers>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h6">Type</Typography>
              <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
              >
                <ToggleButton value="Rendez-vous">Rendez-vous</ToggleButton>
                <ToggleButton value="Appel">Appel</ToggleButton>
                <ToggleButton value="Email">Email</ToggleButton>
                <ToggleButton value="Tache">Tache</ToggleButton>
                <ToggleButton value="Processus">Processus</ToggleButton>
                <ToggleButton value="Visite">Visite</ToggleButton>
              </ToggleButtonGroup>
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="start-date"
                label="Début"
                type="datetime-local"
                defaultValue="2017-05-24T10:30"
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="end-date"
                label="Fin"
                type="datetime-local"
                defaultValue="2017-05-24T10:30"
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
              />
            </Grid>
            {/* Repeat similar Grid items for other fields */}
            <Grid item xs={6}>
              <TextField
                id="creation-date"
                label="Date de création"
                type="date"
                defaultValue={new Date().toISOString().slice(0, 10)}
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="due-date"
                label="Date d'échéance"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={projects}
                // sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Projet"
                    id="project"
                  />
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={Proprietaires}
                // sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Proprietaire"
                    id="Proprietaire"
                  />
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={profiles}
                // sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="profile"
                    id="profile"
                  />
                )}
              />
            </Grid>

            <Grid item xs={12}>
      <TextField
        id="Objet"
        label="Objet"
        defaultValue=""
        fullWidth
      />
    </Grid>
            {/* ...other fields... */}
            <Grid item xs={12}>
              <TextField
                id="description"
                label="Description"
                multiline
                rows={4}
                fullWidth
              />
            </Grid>
          
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Envoyer notification"
              />
            </Grid>
          </Grid>
        </DialogContent>

        {/* -------------------------------------- */}

        <DialogActions>
          <Button
            autoFocus
            variant="outlined"
            startIcon={<LocationOnIcon />}
            onClick={handleClose}
          >
            Enregistrer ma position
          </Button>
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

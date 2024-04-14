import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import {
  Box,
  Grid,
  Typography,
  Autocomplete,
  TextField,
  IconButton,
  Tooltip,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function CaseIntervenants() {
  const theme = useTheme();

  const roles = [
    "Vendeur partenaire",
    "Administrateur des ventes partenajre",
    "Dirigeant partenaire",
  ];

  const avocats = [
    "PERSONNE1",
    "PERSONNE2",
    "PERSONNE3",
    "PERSONNE4",
  
  ];
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Typography variant="h3">Intervenants</Typography>
      </AccordionSummary>
      <Box sx={{ p: 1 }}>
        <Grid
          container
          direction="row"
          justifyContent="start"
          alignItems="stretch"
          spacing={1}
        >
          <Grid item xs={12} sm={4}>
            <Typography variant="h4" sx={{ ml: 2.5 }}>
              ROLE
            </Typography>
            <Autocomplete
              sx={{ mt: 0.5, ml: 2 }}
              disablePortal
              id="combo-box-demo"
              options={roles}
              // sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} label="Sélectionner..." id="" />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h4" sx={{ ml: 0.5 }}>
              PERSONNE
            </Typography>
            <Autocomplete
              sx={{ mt: 0.5 }}
              disablePortal
              id="combo-box-demo"
              options={avocats}
              // sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} label="Sélectionner..." id="" />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h4" align="right" sx={{ mr: 0.5 }}>
              ACTION
            </Typography>
            <Typography align="right">
              {/* <CloseIcon sx={{ color: "red",mt:2 }} fontSize="small" /> */}
              <Tooltip title="Delete Order" arrow>
                <IconButton
                  sx={{
                    "&:hover": { background: theme.colors.error.lighter },
                    color: theme.palette.error.main,
                    mt: 2,
                  }}
                  color="inherit"
                  size="small"
                >
                  <CloseIcon sx={{ color: "red" }} fontSize="small" />
                </IconButton>
              </Tooltip>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Accordion>
  );
}

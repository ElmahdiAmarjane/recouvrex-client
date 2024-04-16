import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Autocomplete,
  Box,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BasicBars from "./BasicBars";

export default function ContratFinance() {
  const projects = [
    { label: "COLO00000057" },
    "COLO00000058",
    "COLO00000059",
    "COLO00000060",
  ];
  return (
    // <Card sx={{px:1,mb:1}}>
    // <Typography variant="h3" >
    // Financement
    // </Typography>
    // </Card>
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Typography variant="h3">Financement</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {/* --------------------------------------------------- */}
        <Grid container>
          <Grid container xs={12} sm={6}>
            {/* --------- */}
            <Grid item xs={12} sm={6}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={projects}
                sx={{ m: 0.9 }}
                renderInput={(params) => (
                  <TextField {...params} label="Produit financier*" id="project" />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={projects}
                sx={{ m: 0.9 }}
                renderInput={(params) => (
                  <TextField {...params} label="Type de demande*" id="project" />
                )}
              />
            </Grid>
            {/* -------------------t2-------------------- */}
            <Grid item xs={6}>
              <Box sx={{ m: 0.9 }}>
                <TextField
                  id="start-date"
                  label="Montant financier*"
                  type="text"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  fullWidth
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              {/* faileds item empty to gard the form */}
            </Grid>
            {/* -------------------t3-------------------- */}
            <Grid item xs={12} sm={6}>
              <Box sx={{ m: 0.9 }}>
                <TextField
                  id="start-date"
                  label="Date de Début"
                  type="datetime-local"
                  // defaultValue="2017-05-24T10:30"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  fullWidth
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box sx={{ m: 0.9 }}>
                <TextField
                  id="start-date"
                  label="Premiere date de paiement "
                  type="datetime-local"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  fullWidth
                />
              </Box>
            </Grid>
    {/* -------------------t4-------------------- */}

            <Grid item xs={6}></Grid>
            <Grid item xs={6}>
              <Box sx={{ m: 0.5 }} textAlign={"right"}>
                <TextField
                  id="start-date"
                  label="Terme*"
                  type="text"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  fullWidth
                />
              </Box>
            </Grid>
            {/* --------- */}
          </Grid>

          <Grid item xs={12} sm={6}>
            {/* <BasicBars/> */}chart
          </Grid>
        </Grid>
        {/* --------------------------------------------------- */}
      </AccordionDetails>
    </Accordion>
  );
}

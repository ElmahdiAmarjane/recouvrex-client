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
                size="small"
                disablePortal
                id="combo-box-demo"
                options={projects}
                sx={{ p: 0.5 }}
                renderInput={(params) => (
                  <TextField {...params} label="Projet" id="project" />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
            <Autocomplete
                size="small"
                disablePortal
                id="combo-box-demo"
                options={projects}
                 sx={{ p: 0.5 }}
                renderInput={(params) => (
                  <TextField {...params} label="Projet" id="project" />
                )}
              />
            </Grid>
            <Grid item xs={6}>
            <TextField
             sx={{ p: 0.5 }}
                size="small"
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
            <Grid item xs={12} sm={6}>
              {/* faileds item empty to gard the form */}
            </Grid>

            <Grid item xs={12} sm={6}>
            <TextField
             sx={{ p: 0.5 }}
                size="small"
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
            <Grid item xs={12} sm={6}>
               <TextField
             sx={{ p: 0.5 }}
                size="small"
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
            <Grid item xs={12}>
              <Box textAlign={"right"}>faileds item</Box>
            </Grid>
            {/* --------- */}
          </Grid>

          <Grid item xs={12} sm={6}>
            chart
          </Grid>
        </Grid>
        {/* --------------------------------------------------- */}
      </AccordionDetails>
    </Accordion>
  );
}

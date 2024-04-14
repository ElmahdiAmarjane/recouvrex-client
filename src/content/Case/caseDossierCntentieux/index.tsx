import { Grid, Card, Box, Typography, Divider, Autocomplete, TextField } from "@mui/material";

function CaseDossierContentieux() {
    const list_charge_de_contentieux = [
        "LOUBNA SOUILAS",
        "choice 2",
        "choice 2",
        "choice 2",
        "choice 2",
        "choice 3",
        
      ];
    const avocats = [     
        "AVOCAT AVOCAT",
        "avocat 2",       
        "avocat 2",       
        "avocat 2",       
        "avocat 2",       
        "avocat 2",       
      ];
  return (
    <Card>
      <Typography variant="h3" sx={{ml: 2 }}>
        Dossier contentieux
      </Typography>
      <Box sx={{p:1}}>
        <Grid
          container
          direction="row"
          justifyContent="start"
          alignItems="stretch"
          spacing={1}
        >
          <Grid item xs={6}>
            <Typography variant="h4" sx={{ mt: 1, ml: 2 }}>
              Type de la procedure
            </Typography>
            <Typography variant="body1" sx={{ mt: 1, ml: 2 }}>
              Mise en demeure
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h4" sx={{ mt: 1, ml: 2 }}>
              ID procedure
            </Typography>
            <Typography variant="body1" sx={{ mt: 1, ml: 2 }}>
              COL00000062
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Divider variant="middle" />
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h4" sx={{ ml: 2.5}}>
              Chargé de contentieux
            </Typography>
            <Autocomplete
                 sx={{mt:0.5,ml:2}}
                disablePortal
                id="combo-box-demo"
                options={list_charge_de_contentieux}
                // sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Sélectionner..." id="" />
                )}
              />
          </Grid>
          <Grid item  xs={12} sm={3}>
            <Typography variant="h4" sx={{ ml: 0.5 }}>
              Avocat
            </Typography>
            <Autocomplete
                 sx={{mt:0.5}}
                disablePortal
                id="combo-box-demo"
                options={avocats}
                // sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Sélectionner..." id="" />
                )}
              />
          </Grid>
          <Grid item  xs={12} sm={3}>
            <Typography variant="h4" sx={{ ml: 0.5 }}>
              ID dossier
            </Typography>
            <TextField
             sx={{mt:0.5}}
                id=""
           
                defaultValue=""
                fullWidth
              />
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
}

export default CaseDossierContentieux;

import { Card, Divider, Grid, Link, Typography } from "@mui/material";

export default function ContratClient() {
  return (
    <Card sx={{ px: 1, mb: 1 }}>
      <Typography variant="h3">Client</Typography>
      <Grid container>
        <Typography
          variant="h4"
          sx={{ border: "2px solid grey", py: 1, px: 2, ml: 2, color: "blue" }}
        >
          MIRA DIDI
        </Typography>

        <Grid item sm={12}>
          <Divider variant="middle" sx={{ mb: 1 }} />
        </Grid>

        <Grid item sm={3}>
          <Typography variant="h4" sx={{ ml: 2 }}>
          N° d'enregistrement
          </Typography>
          <Typography variant="body1" sx={{ mt: 1, ml: 2 }}>
            <Link href="">IND00000553</Link>
          </Typography>
        </Grid>
        <Grid item sm={3}>
          <Typography variant="h4" sx={{ ml: 2 }}>
            Titre*
          </Typography>
          <Typography variant="body1" sx={{ mt: 1, ml: 2 }}>
            un exemple titre 
          </Typography>
        </Grid>
        <Grid item sm={3}>
          <Typography variant="h4" sx={{ ml: 2 }}>
          Prénom
          </Typography>
          <Typography variant="body1" sx={{ mt: 1, ml: 2 }}>
            MIRA
          </Typography>
        </Grid>
        <Grid item sm={3}>
          <Typography variant="h4" sx={{ ml: 2 }}>
          Nom de famille
          </Typography>
          <Typography variant="body1" sx={{ mt: 1, ml: 2 }}>
            DIDI
          </Typography>
        </Grid>
      </Grid>
      {/* ----------- */}
      <Grid container>
        <Grid item sm={12}>
          <Divider variant="middle" sx={{ my: 1 }} />
        </Grid>

        <Grid item sm={6}>
          <Typography variant="h4" sx={{ ml: 2 }}>
          Mobile de souscription*
          </Typography>
          <Typography variant="body1" sx={{ mt: 1, ml: 2 }}>
          0636525874
          </Typography>
        </Grid>
        <Grid item sm={6}>
          <Typography variant="h4" sx={{ ml: 2 }}>
            ID procedure
          </Typography>
          <Typography variant="body1" sx={{ mt: 1, ml: 2 }}>
            COL00000062
          </Typography>
        </Grid>
      </Grid>
      {/* --------- */}

      <Grid container>
        <Grid item sm={12}>
          <Divider variant="middle" sx={{ my: 1 }} />
        </Grid>

        <Grid item sm={12}>
          <Typography variant="h4" sx={{ ml: 2 }}>
            ID procedure
          </Typography>
          <Typography variant="body1" sx={{ mt: 1, ml: 2 }}>
            COL00000062
          </Typography>
        </Grid>

        <Grid item sm={12}>
          <Divider variant="middle" sx={{ my: 1 }} />
        </Grid>
      </Grid>
    </Card>
  );
}

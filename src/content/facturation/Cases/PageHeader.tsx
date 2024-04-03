import {  Grid } from '@mui/material';

// import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import  InforCardWorning  from './infoCards/InforCardWorning';

function PageHeader() {
  const user = {
    name: 'Catherine Pike',
    avatar: '/static/images/avatars/1.jpg'
  };
  return (
    <Grid spacing={2} container justifyContent="space-around" alignItems="center">
      {/* <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          Transactions
        </Typography>
        <Typography variant="subtitle2">
          {user.name}, these are your recent transactions
        </Typography>
      </Grid>
      <Grid item>
        <Button
          sx={{ mt: { xs: 2, md: 0 } }}
          variant="contained"
          startIcon={<AddTwoToneIcon fontSize="small" />}
        >
          Create transaction
        </Button>
      </Grid> */}
       {/* <Grid item>
       <InforCardWorning/>
      </Grid> */}
      <Grid lg={2} sm={6} xs={12}>
        <InforCardWorning  value="$15k" />
      </Grid>
      <Grid lg={2} sm={6} xs={12}>
        <InforCardWorning value="$15k" />
      </Grid>
      <Grid lg={2} sm={6} xs={12}>
        <InforCardWorning value="$15k" />
      </Grid>
      <Grid lg={2} sm={6} xs={12}>
        <InforCardWorning value="$15k" />
      </Grid>
      <Grid lg={2} sm={6} xs={12}>
        <InforCardWorning value="$15k" />
      </Grid>
      <Grid lg={2} sm={6} xs={12}>
        <InforCardWorning value="$15k" />
      </Grid>
      {/* the secend row */}
      <Grid lg={4} sm={6} xs={12}>
        <InforCardWorning value="$15k" />
      </Grid>
      <Grid lg={4} sm={6} xs={12}>
        <InforCardWorning value="$15k" />
      </Grid>
      <Grid lg={2} sm={6} xs={12}>
        <InforCardWorning value="$15k" />
      </Grid>
      <Grid lg={2} sm={6} xs={12}>
        <InforCardWorning value="$15k" />
      </Grid>
    </Grid>
  );
}

export default PageHeader;

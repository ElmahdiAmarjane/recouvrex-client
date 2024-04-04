import {  Grid } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';
import CreateIcon from '@mui/icons-material/Create';
// import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import  InforCardWorning  from './infoCards/InforCardWorning';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ClearIcon from '@mui/icons-material/Clear';
import GroupsIcon from '@mui/icons-material/Groups';



function PageHeader() {
  // const user = {
  //   name: 'Catherine Pike',
  //   avatar: '/static/images/avatars/1.jpg'
  // };
  return (
    <Grid spacing={1}  container justifyContent="center" alignItems="center">
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
      <Grid lg={2} md={3} sm={6} xs={12}>
        <InforCardWorning Icon={CreateIcon} IconColor="primary" text="Brouillon" value="3" />
      </Grid>
      <Grid lg={2} md={3}  sm={6} xs={12}>
        <InforCardWorning Icon={WarningIcon}  text="pre-douteux" value="3" />
      </Grid>
      <Grid lg={2} md={3} sm={6} xs={12}>
        <InforCardWorning Icon={WarningIcon} IconColor="skyblue" text="Douteux" value="3" />
      </Grid>
      <Grid lg={2} md={3} sm={6} xs={12}>
        <InforCardWorning Icon={WarningIcon} IconColor="blue" text="Tres douteux" value="3" />
      </Grid>
      <Grid lg={2} md={3} sm={6} xs={12}>
        <InforCardWorning Icon={WarningIcon} IconColor="orange" text="Pre-contentieux" value="3" />
      </Grid>
      <Grid lg={2} md={3} sm={6} xs={12}>
        <InforCardWorning Icon={WarningIcon} IconColor="red" text="Contentieux" value="3" />
      </Grid>
      {/* the secend row */}
      <Grid lg={4} sm={6} xs={12}>
        <InforCardWorning Icon={GroupsIcon} IconColor="orange" text="Comite des impayes" value="3" />
      </Grid>
      <Grid lg={4} sm={6} xs={12}>
        <InforCardWorning Icon={GroupsIcon} IconColor="red" text="Comite declassement agence" value="3" />
      </Grid>
      <Grid lg={2} md={3} sm={6} xs={12}>
        <InforCardWorning Icon={ClearIcon} IconColor="primary" text="Radié" value="3" />
      </Grid>
      <Grid lg={2} md={3} sm={6} xs={12}>
        <InforCardWorning  Icon={CheckBoxIcon} IconColor="green" text="Termine" value="3" />
      </Grid>
    </Grid>
  );
}

export default PageHeader;
